import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

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
            router.push('/registration/code');
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