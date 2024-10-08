import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtpGuid, setPhoneNumber } from '../../store/otpSlice'

import styles from '../../styles/modules/number.module.scss'

const Number = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [number, setNumber] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            console.log('Window resized, checking keyboard state...')
            if (window.innerHeight < 500) {
                console.log('Keyboard is likely open.')
                setIsKeyboardOpen(true)
            } else {
                console.log('Keyboard is likely closed.')
                setIsKeyboardOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function nextPage() {
        console.log('Next button clicked, validating phone number...')
        if (validatePhoneNumber(number)) {
            console.log('Phone number is valid. Proceeding to send OTP request.')
            sendOtpRequest(number)
        } else {
            console.log('Phone number is invalid.')
            setIsValid(false)
        }
    }

    function validatePhoneNumber(number) {
        console.log('Validating phone number:', number);
        const cleanedNumber = number.replace(/\D/g, '');
        const isValid = cleanedNumber.length === 9;
        console.log(`Cleaned number: ${cleanedNumber}, Valid: ${isValid}`);
        return isValid;
    }

    function handleInputChange(e) {
        console.log('Phone number input changed:', e.target.value);
        setNumber(e.target.value)
        setIsValid(true)
    }

    async function sendOtpRequest(number) {
        const formattedNumber = `998${number.replace(/\D/g, '')}`;
        console.log('Formatted phone number:', formattedNumber);
        
        const data = {
            auth_type: 1,
            email: `random${Math.floor(Math.random() * 10000)}@iman.uz`,
            phone_number: formattedNumber
        };

        console.log('data', data);
        console.log('Sending OTP request via proxy...');
        
        try {
            const response = await axios.post('/api/send-otp', data);
            console.log('OTP sent successfully via proxy:', response.data);

            dispatch(setOtpGuid(response.data.otp_guid));
            dispatch(setPhoneNumber(number))
            localStorage.setItem('phoneNumber', formattedNumber)
            localStorage.setItem('otpGuid', response.data.otp_guid)

            router.push('/registration/code');
        } catch (error) {
            console.error('Error sending OTP via proxy:', error);
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
                    value={number}
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
