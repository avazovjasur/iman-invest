import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/modules/code.module.scss';
import { useRouter } from 'next/router';
import { setTokensAndInvestor } from '@/store/otpSlice';
import axios from 'axios';

const Code = () => {
    const router = useRouter();
    const inputRefs = useRef([]);
    const [otpGuid, setOtpGuid] = useState(null)
    const [secondsLeft, setSecondsLeft] = useState(60);
    const dispatch = useDispatch();
    const phoneNumber = useSelector((state) => state.otp.phoneNumber) || '';
    const maskedNumber = phoneNumber.replace(/\d{2}-\d{2}$/, "** **");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const otpGuid = localStorage.getItem('otpGuid')
            setOtpGuid(otpGuid)
        }
    }, []);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) {
            inputRefs.current[index].value = value;
            const nextEmptyIndex = inputRefs.current.findIndex(input => input.value === '');
            if (nextEmptyIndex !== -1) {
                inputRefs.current[nextEmptyIndex].focus();
            } else {
                const allDigitsFilled = inputRefs.current.every(input => input.value.length === 1);
                if (allDigitsFilled) {
                    sendOtpConfirm()
                }
            }
        } else {
            e.target.value = '';
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const clearInputs = () => {
        inputRefs.current.forEach(input => {
            if (input) input.value = '';
        });
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    };

    const sendOtpConfirm = async () => {
        const code = inputRefs.current.map(input => input.value).join('');
        try {
            const response = await axios.post('/api/confirm-otp', {
                code,
                otp_guid: otpGuid,
            });
            console.log('OTP Confirmation Response:', response.data);
            const { refresh_token, access_token, investor_id } = response.data;
            console.log('refresh_token, access_token, investor_id', refresh_token, access_token, investor_id);
            
            dispatch(setTokensAndInvestor({
                refreshToken: refresh_token,
                accessToken: access_token,
                investorId: investor_id,
            }));

            localStorage.setItem('refreshToken', refresh_token);
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('investorId', investor_id);

            router.push('/registration/pin');
        } catch (error) {
            clearInputs();
        }
    };

    const back = () => {
        router.push('/registration/number');
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev > 0) {
                    return prev - 1;
                }
                clearInterval(timer);
                return 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={back} className={styles.backButton}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L4 8L11 15" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className={styles.title}>Введите код</h1>
                <p className={styles.info}>Мы отправили код на номер +998 {maskedNumber}</p>
                { secondsLeft > 0 ? <p className={styles.resend}>Отправить повторно через 00:{secondsLeft}</p> : 
                    <a href='#!' className={styles.backBtn} type='button' onClick={back}>Вернуться назад к заполнению номера</a>
                }
            </div>

            <div className={styles.codeInputContainer}>
                {[...Array(5)].map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className={styles.codeInput}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                ))}
            </div>

            <div className={styles.helpContainer}>
                <button className={styles.helpButton}>Проблемы со входом?</button>
            </div>
        </div>
    );
}

export default Code;