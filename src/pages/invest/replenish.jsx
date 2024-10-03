import {useEffect, useState} from "react";
import styles from '../../styles/modules/replenish.module.scss';
import stylesPin from '../../styles/modules/pin.module.scss';
import Link from "next/link";
import CurrencyInput from 'react-currency-input-field';
import PlasticCard from "@/components/PlasticCard";
import Modal from "../../components/Modal";

const Replenish = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const [activeCurrency, setActiveCurrency] = useState('сум')
    const [modal, setModal] = useState(false);
    const [pin, setPin] = useState('');
    const handleNumberClick = (number) => {
        console.log(number)
        setPin(prevPin => prevPin + number);
    };

    const handleDelete = () => {
        setPin(prevPin => prevPin.slice(0, -1));
    };

    const handleSwitch = (val) => {
        setActiveIndex(val)
        if (val === 1) setActiveCurrency('сум')
        else setActiveCurrency('$')
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key >= '0' && e.key <= '9') {
                handleNumberClick(e.key);
            } else if (e.key === 'Backspace') {
                handleDelete();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [pin]);

    return <>
        <div className={styles.replenishContainer}>
            <div className={styles.top}>
                <div className={styles.topContentHeader}>
                    <div className={styles.topBackButton}>
                        <Link href="/home">
                            <button type="button" className={styles.topButton}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className={styles.topContent}>
                        <h3 className={styles.topContentTitle}>Введите сумму</h3>
                        <h3 className={styles.topContentDesc}>
                            Неизвестный вклад
                            <span className={styles.topContentPrice}>
                        <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.3" cx="1" cy="1" r="1" fill="#040415"/>
                        </svg>
                        <span> 0 сум</span>
                    </span>
                        </h3>
                    </div>
                </div>
                <div className={styles.currencyBlockCenter}>
                    <div className={styles.currencySwitch}>
                        <div
                            className={`${styles.currencyItem} ${activeIndex === 1 ? styles.currencyItemActive : ''}`}
                            onClick={() => handleSwitch(1)}
                        >
                            Сум
                        </div>
                        <div
                            className={`${styles.currencyItem} ${activeIndex === 2 ? styles.currencyItemActive : ''}`}
                            onClick={() => handleSwitch(2)}
                        >
                            $
                        </div>
                    </div>
                </div>
                <div className={styles.currencyBlock}>
                    <div className={styles.currencyInputBlock}>
                        <CurrencyInput
                            id="currency-input"
                            className={styles.currencyInput}
                            value={pin}
                            name="input-name"
                            placeholder="Введите сумму"
                            decimalsLimit={2}
                            allowNegativeValue={false}
                            onValueChange={(value, name, values) => console.log(value, name, values)}
                        />
                        <span className={styles.currencySum}>{activeCurrency}</span>
                    </div>
                    <div className={styles.currencyDesc}>500 000 - 100 000 000 сум</div>
                </div>
                <div className={styles.paymentMethodCard}>
                    <div className={styles.paymentMethodCardInfo}>
                        <PlasticCard/>
                        <div>
                            <div className={styles.paymentMethodCardTitle}>Способ оплаты</div>
                            <div className={styles.paymentMethodCardDesc}>Пополняем с карты</div>
                        </div>
                    </div>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2" clip-path="url(#clip0_5918_67229)">
                            <path d="M3 1.5L8 6.5L3 11.5" stroke="#040415" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_5918_67229">
                                <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className={styles.replenishBody}>
                <div className={styles.replenishKeyboard}>
                    <div className={stylesPin.numberPad}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                            <button
                                key={number}
                                className={stylesPin.numberButton}
                                onClick={() => handleNumberClick(number.toString())}
                            >
                                {number}
                            </button>
                        ))}
                        <button className={stylesPin.deleteButton} onClick={handleDelete}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4564_18208)">
                                    <path
                                        d="M23.333 7C23.6424 7 23.9392 7.12292 24.158 7.34171C24.3767 7.5605 24.4997 7.85725 24.4997 8.16667V19.8333C24.4997 20.1428 24.3767 20.4395 24.158 20.6583C23.9392 20.8771 23.6424 21 23.333 21H10.4997L4.66633 15.1667C4.37936 14.8458 4.2207 14.4305 4.2207 14C4.2207 13.5695 4.37936 13.1542 4.66633 12.8333L10.4997 7H23.333Z"
                                        stroke="#040415" strokeWidth="1.75" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M18.6667 11.667L14 16.3337M14 11.667L18.6667 16.3337L14 11.667Z"
                                          stroke="#040415" strokeWidth="1.75" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4564_18208">
                                        <rect width="28" height="28" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <button className={styles.contentButtonsItem} onClick={() => setModal(true)}>Пополнить</button>
                <Modal
                    openModal={modal}
                    closeModal={() => setModal(false)}
                >
                    <div className={styles.paymentBlock}>
                        <div className={styles.paymentBlockTitle}>Пополнить с помощью</div>
                        <div>
                            <div className={styles.paymentCheckCard}>
                                <div className={styles.paymentMethodCardInfo}>
                                    <div className={styles.paymentMethodLogo}>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.94014 0.983691C8.58868 0.578352 9.41159 0.578354 10.0601 0.983691L17.5301 5.65244C17.9985 5.94515 18.1408 6.5621 17.8481 7.03044C17.5554 7.49878 16.9385 7.64115 16.4701 7.34844L9.00013 2.67969L1.53013 7.34844C1.0618 7.64115 0.444846 7.49878 0.152136 7.03044C-0.140575 6.5621 0.0017984 5.94515 0.470135 5.65244L7.94014 0.983691ZM2.00013 10.5004C2.00013 9.94815 2.44785 9.50044 3.00013 9.50044C3.55242 9.50044 4.00013 9.94816 4.00013 10.5004V13.5004C4.00013 14.0527 3.55242 14.5004 3.00013 14.5004C2.44785 14.5004 2.00013 14.0527 2.00013 13.5004V10.5004ZM1.00013 17.5004C1.00013 16.9482 1.44785 16.5004 2.00013 16.5004H16.0001C16.5524 16.5004 17.0001 16.9482 17.0001 17.5004C17.0001 18.0527 16.5524 18.5004 16.0001 18.5004H2.00013C1.44785 18.5004 1.00013 18.0527 1.00013 17.5004ZM11.0001 9.50044C10.4478 9.50044 10.0001 9.94815 10.0001 10.5004V13.5004C10.0001 14.0527 10.4478 14.5004 11.0001 14.5004C11.5524 14.5004 12.0001 14.0527 12.0001 13.5004V10.5004C12.0001 9.94816 11.5524 9.50044 11.0001 9.50044ZM6.00013 10.5004C6.00013 9.94815 6.44785 9.50044 7.00013 9.50044C7.55242 9.50044 8.00013 9.94816 8.00013 10.5004V13.5004C8.00013 14.0527 7.55242 14.5004 7.00013 14.5004C6.44785 14.5004 6.00013 14.0527 6.00013 13.5004V10.5004ZM15.0001 9.50044C14.4478 9.50044 14.0001 9.94815 14.0001 10.5004V13.5004C14.0001 14.0527 14.4478 14.5004 15.0001 14.5004C15.5524 14.5004 16.0001 14.0527 16.0001 13.5004V10.5004C16.0001 9.94816 15.5524 9.50044 15.0001 9.50044ZM7.00013 5.50044C6.44785 5.50044 6.00013 5.94816 6.00013 6.50044C6.00013 7.05272 6.44785 7.50044 7.00013 7.50044H11.0001C11.5524 7.50044 12.0001 7.05272 12.0001 6.50044C12.0001 5.94816 11.5524 5.50044 11.0001 5.50044H7.00013Z"
                                                fill="#040415"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className={styles.paymentMethodCardTitle}>Способ оплаты</div>
                                        <div className={styles.paymentMethodCardDesc}>Пополняем с карты</div>
                                    </div>
                                </div>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2" clip-path="url(#clip0_5918_67229)">
                                        <path d="M3 1.5L8 6.5L3 11.5" stroke="#040415" stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5918_67229">
                                            <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <div className={styles.paymentCheckCard}>
                                <div className={styles.paymentMethodCardInfo}>
                                    <div className={styles.paymentMethodLogo} style={{backgroundColor: '#00C0C9'}}>
                                        <svg width="46" height="16" viewBox="0 0 46 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.94722 0.500847H40.9212C41.3586 0.500847 41.7448 0.683257 41.9635 1.03535L45.8129 7.35687C46.1087 7.85235 46.0575 8.45133 45.6327 8.9468L40.2132 15.2683C39.9174 15.6068 39.5311 15.8156 39.0929 15.8156H1.23287C0.473723 15.8156 -0.080134 15.2157 0.00952203 14.4598L1.43983 1.85576C1.53032 1.0871 2.18641 0.5 2.94639 0.5L2.94722 0.500847Z"
                                                fill="#00C0C9"/>
                                            <path
                                                d="M25.9625 11.4242L26.5591 6.61962C26.9613 6.34389 27.4146 6.12075 27.8043 6.12075C28.3095 6.12075 28.5559 6.50169 28.4788 7.15752L27.9601 11.4242H29.7884L30.359 6.76385L30.3716 6.63235C30.7738 6.35662 31.2405 6.12075 31.6293 6.12075C32.1346 6.12075 32.3809 6.50169 32.3038 7.15752L31.7852 11.4242H33.6135L34.1841 6.76385C34.3399 5.46408 33.678 4.67676 32.4991 4.67676C31.6821 4.67676 30.8132 5.14932 30.23 5.58286C29.9837 5.00509 29.439 4.67676 28.674 4.67676C27.909 4.67676 27.17 5.05769 26.5868 5.45136L26.6647 4.86086H24.9537L24.1367 11.425H25.9651L25.9625 11.4242ZM36.7732 7.53845C36.955 6.67222 37.5768 6.15978 38.3418 6.15978C39.1068 6.15978 39.5216 6.59332 39.5216 7.28902C39.5216 7.36792 39.5216 7.45955 39.509 7.53845H36.7732ZM34.8544 8.41826C34.8284 10.0591 36.0082 11.582 38.4197 11.582C39.2752 11.582 40.0017 11.4115 40.6494 11.0042L40.7793 9.45502C40.248 9.78336 39.4436 10.0065 38.744 10.0065C37.8231 10.0065 36.9936 9.59925 36.7607 8.65412H41.2468C41.3113 8.48359 41.3633 8.07635 41.3633 7.68269C41.3633 5.95023 40.4164 4.68948 38.4717 4.68948C36.5269 4.68948 34.8804 5.85775 34.8544 8.41741V8.41826ZM12.5954 9.50762C12.5954 8.79835 13.4124 8.53619 14.2545 8.53619H15.11L14.9801 9.59925C14.6173 9.88771 13.9687 10.1897 13.4241 10.1897C12.9314 10.1897 12.5946 9.91401 12.5946 9.50677L12.5954 9.50762ZM10.7671 9.6527C10.7537 10.7158 11.61 11.5828 12.9188 11.5828C13.8397 11.5828 14.5134 11.1892 14.9022 10.7556L14.8243 11.425H16.5872L17.0154 7.86764C17.2232 6.10888 16.6526 4.6776 14.4221 4.6776C13.5146 4.6776 12.4128 4.88801 11.8162 5.28167L11.6343 6.75197C12.1145 6.48897 13.0479 6.16911 13.9034 6.16911C14.9273 6.16911 15.291 6.68665 15.2516 7.23812H14.1623C12.5803 7.23812 10.778 7.85491 10.7654 9.65355L10.7671 9.6527ZM5.69776 9.82323L6.09996 6.59417C6.48875 6.27941 6.92949 6.14791 7.31828 6.16063C8.09585 6.17336 8.52403 6.80373 8.52403 7.78874C8.52403 9.06221 7.86292 10.1516 6.74766 10.1516C6.39742 10.1516 5.99606 10.0336 5.69776 9.82323ZM3.42871 13.591H5.24362L5.54191 11.1103C5.8268 11.3334 6.35888 11.5828 7.03255 11.5828C9.13319 11.5828 10.4169 9.7053 10.4169 7.65808C10.4169 5.91205 9.5999 4.69118 8.06988 4.69118C7.34341 4.69118 6.68231 4.92704 6.17705 5.34785L6.24157 4.86256H4.47861L3.42871 13.5927V13.591ZM22.5137 4.86086L20.543 9.40326L19.519 4.86086H17.4963L19.2987 11.4378L18.2488 13.591H20.2455L24.4853 4.86086H22.5146H22.5137Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className={styles.paymentMethodCardTitle}>Способ оплаты</div>
                                        <div className={styles.paymentMethodCardDesc}>Пополняем с карты</div>
                                    </div>
                                </div>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2" clip-path="url(#clip0_5918_67229)">
                                        <path d="M3 1.5L8 6.5L3 11.5" stroke="#040415" stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5918_67229">
                                            <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <div className={styles.paymentCheckCard}>
                                <div className={styles.paymentMethodCardInfo}>
                                    <div className={styles.paymentMethodLogo}>
                                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 0.5C5.44772 0.5 5 0.947715 5 1.5V5.5H1C0.447715 5.5 0 5.94771 0 6.5C0 7.05228 0.447715 7.5 1 7.5H5V11.5C5 12.0523 5.44772 12.5 6 12.5C6.55228 12.5 7 12.0523 7 11.5V7.5H11C11.5523 7.5 12 7.05229 12 6.5C12 5.94772 11.5523 5.5 11 5.5H7V1.5C7 0.947715 6.55228 0.5 6 0.5Z"
                                                fill="#040415"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className={styles.paymentMethodCardTitle}>Способ оплаты</div>
                                        <div className={styles.paymentMethodCardDesc}>Пополняем с карты</div>
                                    </div>
                                </div>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2" clip-path="url(#clip0_5918_67229)">
                                        <path d="M3 1.5L8 6.5L3 11.5" stroke="#040415" stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5918_67229">
                                            <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <button className={styles.contentButtonsItem} onClick={() => setModal(false)}>Выбрать для
                            оплаты
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    </>
}

export default Replenish;
