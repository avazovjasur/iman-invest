import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useTokenChecker = () => {
  const router = useRouter();

  useEffect(() => {
    const clearDataAndRedirect = () => {
      localStorage.clear();

      router.push('/registration/lang');
    };

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || accessToken == 'undefined' || !refreshToken || refreshToken == 'undefined') {
      clearDataAndRedirect();
    }
  }, [router]);
};

export default useTokenChecker;
