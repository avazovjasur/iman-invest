import { useRef } from 'react';
import styles from '../../styles/modules/code.module.scss';
import { useRouter } from 'next/router';

const Code = () => {
    const router = useRouter();
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        if (/^\d+$/.test(value)) { // проверяем, что введены только цифры
            const digits = value.split('').slice(0, 4); // берем первые 4 цифры
            digits.forEach((digit, i) => {
                if (index + i < 4) {
                    inputRefs.current[index + i].value = digit;
                }
            });

            const nextIndex = index + digits.length;
            if (nextIndex < 4) {
                inputRefs.current[nextIndex].focus();
            }
        } else {
            e.target.value = ''; // если не цифры, очищаем поле
        }

        // Проверяем заполненность всех полей после изменения значения
        const allDigitsFilled = inputRefs.current.every((input) => input.value.length === 1);
        if (allDigitsFilled) {
            router.push('/registration/pin');
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

    const back = () => {
        router.push('/registration/number');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={back} className={styles.backButton}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L4 8L11 15" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h1 className={styles.title}>Введите код</h1>
                <p className={styles.info}>Мы отправили код на номер +998 77 666 ** **</p>
                <p className={styles.resend}>Отправить повторно через 00:42</p>
            </div>

            <div className={styles.codeInputContainer}>
                {[...Array(4)].map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className={styles.codeInput}
                        type="number"
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