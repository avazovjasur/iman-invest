import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

import styles from '../../styles/modules/number.module.scss';

const Number = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < 500) {
                setIsKeyboardOpen(true);
            } else {
                setIsKeyboardOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function nextPage() {
        if (validatePhoneNumber(phoneNumber)) {
            sendOtpRequest(phoneNumber);
        } else {
            setIsValid(false);
        }
    }

    function validatePhoneNumber(number) {
        const cleanedNumber = number.replace(/\D/g, '');
        return cleanedNumber.length === 9;
    }

    function handleInputChange(e) {
        setPhoneNumber(e.target.value);
        setIsValid(true);
    }

    async function sendOtpRequest(number) {
        const formattedNumber = `998${number.replace(/\D/g, '')}`;
        try {
            const response = await axios.post('https://dev.api.investment.imaninvest.com/v1/investor/send-otp', {
                auth_type: 1, // always 1 as per your instructions
                email: `random${Math.floor(Math.random() * 10000)}@iman.uz`, // random email
                phone_number: formattedNumber
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log('OTP sent:', response.data);
            router.push('/registration/code');
        } catch (error) {
            console.error('Error sending OTP:', error);
            setIsValid(false);
        }
    }

    return (
        <div className={`${styles.container} ${isKeyboardOpen ? styles.keyboardOpen : ''}`}>
            <h1 className={styles.title}>Введите свой<br /> мобильный номер</h1>
            <p className={styles.subtitle}>Это необходимо для подтверждения<br /> вашего аккаунта</p>
            <div className={styles.numberInput}>
                <p>+998</p>
                <InputMask
                    mask="(99) 999 99-99"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Номер телефона"
                    type="tel"
                    inputMode="numeric"
                    className={!isValid ? styles.errorInput : ''}
                />
            </div>
            {!isValid && <p className={styles.error}>Пожалуйста, введите корректный номер телефона</p>}
            <div className={styles.bottom}>
                <p className={styles.text}>Нажимая на кнопку Продолжить вы соглашаетесь с условиями <span>Публичной оферты, Политики конфиденциальности</span></p>
                <button onClick={nextPage} className={styles.next} type='button'>Продолжить</button>
            </div>
        </div>
    );
}

export default Number;