import styles from "@/styles/modules/confirmCode.module.scss";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const ConfirmCode = () => {
    const inputRefs = useRef([]);
    const [secondsLeft, setSecondsLeft] = useState(60);
    const [otpGuid, setOtpGuid] = useState(null)
    const phoneNumber = useSelector((state) => state.otp.phoneNumber) || '';
    const maskedNumber = phoneNumber.replace(/\d{2}-\d{2}$/, "** **");
    const router = useRouter()
    const back = () => {
        router.push('/home');
    };

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
                    router.push('/invest/success');
                    console.log(allDigitsFilled)
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
        inputRefs.current && inputRefs.current.forEach(input => {
            if (input) input.value = '';
        });
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

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

    return <>
        <div className={styles.top}>
            <div className={styles.topContentHeader}>
                <div className={styles.topBackButton}>
                    <Link href="/invest/add-card">
                        <button type="button" className={styles.topButton}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="2"/>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className={styles.topContent}>
                    <h3 className={styles.topContentTitle}>Добавление карты</h3>
                </div>
            </div>
        </div>

        <div className={styles.contentBody}>
            <div>
                <div className={styles.contentTitle}>Введите код из смс</div>
                <p className={styles.contentDesc}>Мы отправили код на номер +998 {maskedNumber}</p>
            </div>
            {secondsLeft > 0 ? <p className={styles.expiryCode}>Отправить новый через 00:{secondsLeft}</p> :
                <a href='#!' className={styles.backBtn} type='button' onClick={back}>Вернуться назад к заполнению номера</a>
            }
            <div className={styles.codeInputContainer}>
                {[...Array(5)].map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                ))}
            </div>

            <div className={styles.helpContainer}>
                <button>Проблемы со входом?</button>
            </div>
        </div>
    </>
}

export default ConfirmCode
