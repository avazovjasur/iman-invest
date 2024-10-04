import styles from "@/styles/modules/addCard.module.scss";
import Link from "next/link";
import {useRef, useState} from "react";
import InputMask from "react-input-mask";
import {useRouter} from "next/router";

const AddCard = () => {
    const [pan, setPan] = useState('');
    const inputRefs = useRef([]);
    const router = useRouter()

    function handlePanChange(e) {
        setPan(e.target.value)
    }

    function toConfirmCard() {
        router.push('/invest/confirm-code')
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        if (/^(\d{1,2})$/.test(value) && value.length === 2) {
            inputRefs.current[index].value = value;
            const nextEmptyIndex = inputRefs?.current.findIndex(input => input.value === '');
            if (nextEmptyIndex !== -1) {
                inputRefs.current[nextEmptyIndex].focus();
            } else {
                const allDigitsFilled = inputRefs.current.every(input => input.value.length === 2);
                // if (allDigitsFilled) {
                //     sendOtpConfirm()
                // }
            }
        } else {
            // e.target.value = '';
        }
    };

    return <>
        <div className={styles.top}>
            <div>
                <Link href="/invest/replenish">
                    <button type="button" className={styles.topButton}>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </Link>
                <div className={styles.addCardTitle}>Добавьте карту</div>
                <div className={styles.addCardDesc}>Мы не будем списывать деньги без вашего согласия</div>
            </div>

            <div className={styles.addCardForm}>
                <div className={styles.addCardPanBlock}>
                    <div>
                        <div className={styles.addCardLabel}>Номер карты</div>
                        <InputMask
                            className={styles.cardPan}
                            mask="9999 9999 9999 9999"
                            value={pan}
                            onChange={handlePanChange}
                            placeholder="Введите номер карты"
                            type="tel"
                            inputMode="numeric"
                        />
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0 4C0 1.79086 1.79086 0 4 0H7V2H4C2.89543 2 2 2.89543 2 4V7H0V4ZM0 16C0 18.2091 1.79086 20 4 20H7V18H4C2.89543 18 2 17.1046 2 16V13H0V16ZM16 0C18.2091 0 20 1.79086 20 4V7H18V4C18 2.89543 17.1046 2 16 2H13V0H16ZM20 16C20 18.2091 18.2091 20 16 20H13V18H16C17.1046 18 18 17.1046 18 16V13H20V16ZM20 9H0V11H20V9Z"
                              fill="#040415"/>
                    </svg>
                </div>

                <div className={styles.addCardExpiryBlock}>
                    <div>
                        <div className={styles.addCardLabel}>Срок действия</div>
                        <div className={styles.codeInputContainer}>
                            <input
                                key={0}
                                ref={(el) => (inputRefs.current[0] = el)}
                                type="text"
                                inputMode="numeric"
                                placeholder={'мм'}
                                maxLength="2"
                                onChange={(e) => handleInputChange(e, 0)}
                                onKeyDown={(e) => handleKeyDown(e, 0)}
                            />
                            <span className={styles.cardExpiryLine}></span>
                            <input
                                key={1}
                                ref={(el) => (inputRefs.current[1] = el)}
                                type="text"
                                inputMode="numeric"
                                placeholder={'гг'}
                                maxLength="2"
                                onChange={(e) => handleInputChange(e, 1)}
                                onKeyDown={(e) => handleKeyDown(e, 1)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button className={styles.contentButtonsItem} onClick={toConfirmCard}>Добавить</button>
        </div>
    </>
}

export default AddCard
