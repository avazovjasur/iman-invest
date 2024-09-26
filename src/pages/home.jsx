import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setInvestments, setInvestmentsAmount, setInvestmentsProfit, setAutopayments } from '@/store/otpSlice';
import { useRouter } from 'next/router';
import axios from 'axios';

import NavBar from "@/components/Navbar";
import HomeInner from "@/components/HomeInner/HomeInner";
import ProjectsInner from "@/components/ProjectsInner";
import StartInner from "@/components/StartInner";
import OnBoarding from "@/components/OnBoarding";
import useTokenChecker from '@/hooks/useTokenChecker';

const Home = () => {
  useTokenChecker()
  const router = useRouter()

  const [activeIndex, setActiveIndex] = useState(0);
  const [isOnBoardingVisible, setIsOnBoardingVisible] = useState(false);
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(null);
  const investmentAmount = useSelector((state) => state.otp.investments_amount);
  const investmentsProfit = useSelector((state) => state.otp.investments_profit);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      setAccessToken(token);
    }
  }, []);

  const fetchInvestments = async () => {
    try {
      const response = await axios.get('/api/entrypoints/investments', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      let overallAmount = 0
      let overallLastMonthProfitAmount = 0

      response.data.map((investment) => {
        if (investment.investment_amount) {
          overallAmount += investment.investment_amount
        }
        if (investment.last_month_profit?.amount) {
          overallLastMonthProfitAmount += investment.last_month_profit?.amount
        }
      })

      console.log('overallAmount', overallAmount);

      dispatch(setInvestmentsAmount(overallAmount));
      dispatch(setInvestmentsProfit(overallLastMonthProfitAmount));
      dispatch(setInvestments(response.data));

      console.log(response.data);
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.log('403 error, refreshing tokens...');
        await refreshTokensAndRetry(fetchInvestments);
      } else {
        console.error('Ошибка при загрузке инвестиций:', error);
      }
    }
  };

  const fetchResident = async () => {
    try {
      const response = await axios.get('/api/entrypoints/personal-data', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      localStorage.setItem('resident', response.data.resident)
      console.log('personal data', response.data.resident)
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.log('403 error, refreshing tokens...');
        await refreshTokensAndRetry(fetchResident);
      } else {
        console.error('Ошибка при загрузке персональных данных:', error);
      }
    }
  };

  const fetchInvestorStatus = async () => {
    try {
      const response = await axios.get('/api/entrypoints/get-status', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })

      localStorage.setItem('investorStatus', response.data.status)
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.log('403 error, refreshing tokens...');
        await refreshTokensAndRetry(fetchInvestorStatus);
      } else {
        console.error('Ошибка при загрузке персональных данных:', error);
      }
    }
  };

  const fetchStrategies = async () => {
    try {
      const response = await axios.get('/api/entrypoints/get-strategies', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })

      localStorage.setItem('strategyId', response.data[0].guid)
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.log('403 error, refreshing tokens...');
        await refreshTokensAndRetry(fetchStrategies);
      } else {
        console.error('Ошибка при загрузке персональных данных:', error);
      }
    }
  };

  const fetchTariffs = async () => {
    try {
      const response = await axios.get('/api/entrypoints/get-tariffs', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })

      localStorage.setItem('tariffId', response.data[0].guid)
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.log('403 error, refreshing tokens...');
        await refreshTokensAndRetry(fetchTariffs);
      } else {
        console.error('Ошибка при загрузке персональных данных:', error);
      }
    }
  };

  const fetchAutoPayments = async () => {
    try {
      const response = await axios.get('/api/entrypoints/get-autopayments', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })

      dispatch(setAutopayments(response.data))
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        console.log('403 error, refreshing tokens...');
        await refreshTokensAndRetry(fetchTariffs);
      } else {
        console.error('Ошибка при загрузке персональных данных:', error);
      }
    }
  }

  const refreshTokensAndRetry = async (retryCallback) => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post('/api/refresh-token', { refreshToken });

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      setAccessToken(accessToken);

      retryCallback();
    } catch (error) {
      if (error.response.status === 400) {
        localStorage.clear();

        router.push('/registration/lang')
      }
      console.error('Ошибка при обновлении токенов:', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchInvestments()
      fetchResident()
      fetchInvestorStatus()
      fetchStrategies()
      fetchTariffs()
      fetchAutoPayments()
      console.log('investmentAmount', investmentAmount);
      console.log('investmentsProfit', investmentsProfit);
    }
  }, [accessToken]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenOnBoarding = localStorage.getItem('hasSeenOnBoarding');
      if (!hasSeenOnBoarding) {
        setIsOnBoardingVisible(true);
        localStorage.setItem('hasSeenOnBoarding', 'true');
      }
    }
  }, []);

  useEffect(() => {
    if (isOnBoardingVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOnBoardingVisible]);

  const handleOnBoardingClose = () => {
    setIsOnBoardingVisible(false);
  };

  return (
    <div className='wrapper'>
      {activeIndex === 0 && <HomeInner />}
      {activeIndex === 1 && <ProjectsInner />}
      {activeIndex === 2 && <StartInner />}
      <NavBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {isOnBoardingVisible && <OnBoarding onClose={handleOnBoardingClose} />}
    </div>
  );
};

export default Home;
