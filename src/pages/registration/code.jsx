import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Импортируем useSelector
import styles from '../../styles/modules/code.module.scss';
import { useRouter } from 'next/router';
import { setTokensAndInvestor } from '@/store/otpSlice';
import axios from 'axios'; // Убедитесь, что axios импортирован, если он будет использоваться для запроса

const Code = () => {
    const router = useRouter();
    const inputRefs = useRef([]);
    const otpGuid = useSelector(state => state.otp.otpGuid);
    const dispatch = useDispatch();

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

    const sendOtpConfirm = async () => {
        const code = inputRefs.current.map(input => input.value).join('');
        try {
            const response = await axios.post('/api/confirm-otp', {
                code,
                otp_guid: otpGuid,
            });
            console.log('OTP Confirmation Response:', response.data);
            const { refresh_token, access_token, investor_id } = response.data;
            
            dispatch(setTokensAndInvestor({
                refreshToken: refresh_token,
                accessToken: access_token,
                investorId: investor_id
            }));

            router.push('/registration/pin');
        } catch (error) {
            console.error('Error confirming OTP:', error);
        }
    };

    const back = () => {
        router.push('/registration/number');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={back} className={styles.backButton}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L4 8L11 15" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className={styles.title}>Введите код</h1>
                <p className={styles.info}>Мы отправили код на номер +998 77 666 ** **</p>
                <p className={styles.resend}>Отправить повторно через 00:42</p>
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