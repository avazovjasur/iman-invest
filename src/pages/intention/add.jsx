import styles from "@/styles/modules/intentionAdd.module.scss"
import Link from "next/link";
import Modal from "../../components/Modal";
import {useEffect, useState} from "react";

const add = () => {
    const [modal, setModal] = useState(false);
    const [modalAim, setModalAim] = useState(false);
    const [modalAnswer, setModalAnswer] = useState(false);
    const [selectedId, setSelectedId] = useState(3);
    const [percentage, setPercentage] = useState(27);
    const [income, setIncome] = useState('0');
    const [amount, setAmount] = useState(null)
    const [term, setTerm] = useState(24)
    const [isChecked, setIsCapActive] = useState(false);

    const handleTermChange = (id, percentage) => {
        setSelectedId(id);
        setPercentage(percentage);
        calculateIncome(amount, percentage);
    };

    const handleCheckboxChange = () => {
        setIsCapActive(!isChecked);
    };

    const calculateIncome = (amount, percentage) => {
        const income = (amount * percentage) / 100;
        setIncome(income.toString());
    };

    const showModalAim = () => {
        setModal(false)
        setModalAim(true)
    }

    const showModalAnswer = () => {
        setModalAim(false)
        setModalAnswer(true)
    }

    useEffect(() => {
        if (selectedId === 1) {
            setTerm(12)
        } else if (selectedId === 2) {
            setTerm(18)
        } else if (selectedId === 3) {
            setTerm(24)
        }
    }, [selectedId])

    return <>
        <div className={styles.container}>
            <div className={styles.top}>
                <Link href="/intention/open">
                    <button type="button" className={styles.topButton}>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
                <img src="/coins.png" alt=""/>
            </div>

            <div className={styles.body}>
                <div>
                    <div className={styles.title}>О цели</div>
                    <div className={`${styles.contentWrapperBox} ${styles.contentWrapperHistory}`}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featuresListItem}>
                                <div className={styles.featuresListItemIcon}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M6 0C5.44772 0 5 0.447715 5 1V2C3.34315 2 2 3.34315 2 5V7V9V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V9V7V5C18 3.34315 16.6569 2 15 2V1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0ZM13 4H7C7 4.55228 6.55228 5 6 5C5.44772 5 5 4.55228 5 4C4.44772 4 4 4.44772 4 5V7L16 7V5C16 4.44772 15.5523 4 15 4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4ZM4 15V9L16 9V15C16 15.5523 15.5523 16 15 16H5C4.44772 16 4 15.5523 4 15Z"
                                              fill="#3680FF"/>
                                    </svg>
                                </div>
                                <div className={styles.featuresListItemTexts}>
                                    <h3>27% годовых</h3>
                                    <p>ставка без дополнительных условий
                                        и трат</p>
                                </div>
                            </li>
                            <li className={styles.featuresListItem}>
                                <div className={styles.featuresListItemIcon}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M3 2C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.31607 3.44129 0 4.20435 0 5V11C0 11.7956 0.31607 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H4V15C4 15.7956 4.31607 16.5587 4.87868 17.1213C5.44129 17.6839 6.20435 18 7 18H17C17.7957 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7957 20 15V9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.5587 6.31607 17.7957 6 17 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H3ZM14 6V5C14 4.73478 13.8946 4.48043 13.7071 4.29289C13.5196 4.10536 13.2652 4 13 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V11C2 11.2652 2.10536 11.5196 2.29289 11.7071C2.48043 11.8946 2.73478 12 3 12H4V9C4 8.20435 4.31607 7.44129 4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6H14ZM6 13V9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8H15H17C17.2652 8 17.5196 8.10536 17.7071 8.29289C17.8946 8.48043 18 8.73478 18 9V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H7C6.73478 16 6.48043 15.8946 6.29289 15.7071C6.10536 15.5196 6 15.2652 6 15V13ZM9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.7957 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2043 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2043 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z"
                                              fill="#3680FF"/>
                                    </svg>
                                </div>
                                <div className={styles.featuresListItemTexts}>
                                    <h3>Ежемесячные выплаты</h3>
                                    <p>Получайте доход каждый месяц</p>
                                </div>
                            </li>
                            <li className={styles.featuresListItem}>
                                <div className={styles.featuresListItemIcon}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4633_6136)">
                                            <path
                                                d="M17.4998 11.5717L9.99981 18.9997L2.49981 11.5717C2.00512 11.0903 1.61546 10.5117 1.35536 9.87232C1.09527 9.23295 0.970374 8.54664 0.98855 7.85662C1.00673 7.1666 1.16758 6.48782 1.46097 5.86303C1.75436 5.23823 2.17395 4.68094 2.6933 4.22627C3.21265 3.77159 3.82052 3.42938 4.47862 3.22117C5.13673 3.01296 5.83082 2.94327 6.51718 3.01649C7.20354 3.08971 7.86731 3.30425 8.46669 3.64659C9.06606 3.98894 9.58806 4.45169 9.99981 5.00569C10.4133 4.45571 10.9359 3.99701 11.5349 3.65829C12.1339 3.31958 12.7963 3.10814 13.4807 3.03721C14.1652 2.96628 14.8569 3.03739 15.5126 3.24608C16.1683 3.45477 16.7738 3.79656 17.2914 4.25005C17.8089 4.70354 18.2272 5.25897 18.5202 5.88158C18.8132 6.50419 18.9746 7.18057 18.9941 7.8684C19.0137 8.55622 18.8911 9.24068 18.6339 9.87894C18.3768 10.5172 17.9907 11.0955 17.4998 11.5777"
                                                stroke="#3680FF" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                            <path
                                                d="M9.99985 5L6.70685 8.293C6.51938 8.48053 6.41406 8.73484 6.41406 9C6.41406 9.26516 6.51938 9.51947 6.70685 9.707L7.24985 10.25C7.93985 10.94 9.05985 10.94 9.74985 10.25L10.7498 9.25C11.3466 8.65327 12.1559 8.31803 12.9998 8.31803C13.8438 8.31803 14.6531 8.65327 15.2498 9.25L17.4998 11.5"
                                                stroke="#3680FF" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.5 14.5L12.5 16.5" stroke="#3680FF"
                                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13 12L15 14" stroke="#3680FF" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4633_6136">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.featuresListItemTexts}>
                                    <h3>Партнерство 99%</h3>
                                    <p>про партнерство</p>
                                </div>
                            </li>
                            <li className={styles.featuresListItem}>
                                <div className={styles.featuresListItemIcon}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4633_6146)">
                                            <path
                                                d="M9.99983 1C12.3357 3.06658 15.3843 4.14257 18.4998 4C18.9534 5.54302 19.0922 7.16147 18.908 8.75918C18.7237 10.3569 18.2202 11.9013 17.4272 13.3005C16.6343 14.6998 15.5682 15.9254 14.2923 16.9045C13.0164 17.8836 11.5566 18.5962 9.99983 19C8.44305 18.5962 6.98331 17.8836 5.70738 16.9045C4.43144 15.9254 3.36534 14.6998 2.57243 13.3005C1.77952 11.9013 1.27597 10.3569 1.09171 8.75918C0.907451 7.16147 1.04624 5.54302 1.49983 4C4.61536 4.14257 7.664 3.06658 9.99983 1Z"
                                                stroke="#3680FF" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 10L9 12L13 8" stroke="#3680FF"
                                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4633_6146">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.featuresListItemTexts}>
                                    <h3>Средства в безопасности</h3>
                                    <p>Ваши деньги надежно защищены
                                        и никто не сможет их украсть</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button
                    type="button"
                    className={styles.bottomButton}
                    onClick={() => setModal(true)}
                >
                    Продолжить
                </button>
            </div>
        </div>
        <Modal
            openModal={modal}
            closeModal={() => setModal(false)}
        >
            <div className={styles.tariffBlock}>
                <div className={styles.tariffCheckBlock}>
                    <h3 className={styles.contentTitle}>Выберите тариф</h3>
                    <div className={styles.tariffList}>
                        <label htmlFor="tariff1" className={styles.tariffItem}>
                            <input type="radio" id="tariff1" name="tariff"/>
                            <div className={styles.radioGroup}>
                                <div className={styles.tariffItemDesc}>
                                    <img src="/flag-circle.svg" alt=""/>
                                    Сумовый
                                </div>
                                <div className={styles.tariffItemPercent}>
                                    ~27%
                                </div>
                            </div>
                            <span className={styles.radioIcon}></span>
                        </label>
                        <label htmlFor="tariff2" className={styles.tariffItem}>
                            <input type="radio" id="tariff2" name="tariff"/>
                            <div className={styles.radioGroup}>
                                <div className={styles.tariffItemDesc}>
                                    <img src="/flag-usa-circle.svg" alt=""/>
                                    Валютный
                                </div>
                                <div className={styles.tariffItemPercent}>
                                    ~13%
                                </div>
                            </div>
                            <span className={styles.radioIcon}></span>
                        </label>
                    </div>
                    <div className={styles.tariffDesc}>Если вы вложите 1 000 000 сум, то прибыль будет составлять ~270
                        000 сум
                    </div>
                </div>
                <label htmlFor="time">
                    <h3 className={styles.contentTitle}>Выберите срок</h3>
                    <div className={styles.contentFormBlock}>
                        <div className={styles.contentFormList}>
                            <div
                                id="term-1"
                                className={`${styles.contentFormListItem} ${selectedId === 1 ? styles.active : ''}`}
                                onClick={() => handleTermChange(1, 15)}
                            >
                                12 мес
                            </div>
                            <div
                                id="term-2"
                                className={`${styles.contentFormListItem} ${selectedId === 2 ? styles.active : ''}`}
                                onClick={() => handleTermChange(2, 20)}
                            >
                                18 мес
                            </div>
                            <div
                                id="term-3"
                                className={`${styles.contentFormListItem} ${selectedId === 3 ? styles.active : ''}`}
                                onClick={() => handleTermChange(3, 27)}
                            >
                                24 мес
                            </div>
                        </div>
                        <div
                            className={`${styles.contentFormPersentage}  ${percentage > 0 ? styles.active : ''}`}>~{percentage}%
                        </div>
                    </div>
                </label>
                <div className={styles.totalList}>
                    <div className={styles.totalListItem}>
                        <div className={styles.totalOther}>
                            <div className={styles.totalOtherTexts}>
                                <h3>Капитализация</h3>
                                <p>Прибыль увеличивается, потому что находится в обороте</p>
                            </div>
                            <div>
                                <label
                                    className={`${styles.totalOtherCheckbox} ${isChecked ? styles.active : ''}`}
                                    htmlFor="cap"
                                >
                                    <input
                                        type="checkbox"
                                        name="cap"
                                        id="cap"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        className={styles.totalButton}
                        onClick={showModalAim}
                    >
                        Открыть вклад
                    </button>
                    <div className={styles.totalText}>
                        <span>Открывая вклад, вы соглашаетесь с </span>
                        <span className={styles.condition}>условиями</span>
                    </div>
                </div>
            </div>
        </Modal>

        <Modal
            openModal={modalAim}
            closeModal={() => setModalAim(false)}
        >
            <div className={styles.tariffBlock}>
                <h3 className={styles.contentTitle}>Цель создана!</h3>
                <div className={styles.tariffDataBlock}>
                    <div className={styles.tariffData}>
                        <div className={styles.tariffItemData}>Сумовый</div>
                        <div className={styles.tariffItemData}>24 месяца</div>
                        <div className={styles.tariffItemData}>~27%</div>
                    </div>
                    <div className={styles.tariffDesc}>
                        Пополните цель, и прибыль начнёт сразу начисляться.
                    </div>
                </div>
                <div className={styles.billGift}>
                    <div className={styles.billGiftIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.1467 18.2412L12.8077 23.4246C12.3596 23.6733 11.6265 23.6733 11.1785 23.4246L1.83948 18.2412C1.61547 18.1169 1.50348 17.953 1.50348 17.7891H1.4043V6.20996H22.4827V17.7891C22.4827 17.953 22.3707 18.1169 22.1467 18.2412Z"
                                fill="#4059E6"/>
                            <path
                                d="M22.4833 6.21001V17.7892C22.4833 17.9531 22.3713 18.117 22.1473 18.2413L12.8082 23.4247C12.5753 23.5539 12.2653 23.6155 11.9583 23.6102C11.9656 17.812 12.1304 12.0065 11.9502 6.20996L22.4833 6.21001Z"
                                fill="#6E84FF"/>
                            <path
                                d="M11.1789 11.8461L1.83993 6.66274C1.3919 6.41407 1.3919 6.00719 1.83993 5.75852L11.1789 0.575176C11.627 0.326504 12.3601 0.326504 12.8081 0.575176L22.1471 5.75857C22.5951 6.00724 22.5951 6.41411 22.1471 6.66278L12.8081 11.8461C12.3601 12.0948 11.627 12.0948 11.1789 11.8461Z"
                                fill="#CEFFC8"/>
                            <path
                                d="M11.1789 11.8461L1.83993 6.66274C1.3919 6.41407 1.3919 6.00719 1.83993 5.75852L11.1789 0.575176C11.627 0.326504 12.3601 0.326504 12.8081 0.575176L22.1471 5.75857C22.5951 6.00724 22.5951 6.41411 22.1471 6.66278L12.8081 11.8461C12.3601 12.0948 11.627 12.0948 11.1789 11.8461Z"
                                fill="#FFD7AD"/>
                            <path
                                d="M11.1789 11.8461L1.83993 6.66274C1.3919 6.41407 1.3919 6.00719 1.83993 5.75852L11.1789 0.575176C11.627 0.326504 12.3601 0.326504 12.8081 0.575176L22.1471 5.75857C22.5951 6.00724 22.5951 6.41411 22.1471 6.66278L12.8081 11.8461C12.3601 12.0948 11.627 12.0948 11.1789 11.8461Z"
                                fill="#9BAAFF"/>
                            <path
                                d="M18.3325 3.47411C18.332 3.52891 18.3168 3.58256 18.2884 3.62943C18.26 3.67629 18.2195 3.71463 18.1712 3.74041L6.98143 9.70502C6.96602 9.71323 6.94993 9.7201 6.93334 9.72555L6.89551 9.74669V20.8781C6.89551 20.9311 6.88167 20.9833 6.85534 21.0293C6.82901 21.0754 6.79112 21.1138 6.74541 21.1407C6.6997 21.1676 6.64775 21.1821 6.5947 21.1828C6.54166 21.1835 6.48936 21.1703 6.44298 21.1445L4.56798 20.1039C4.52044 20.0775 4.48083 20.0389 4.45325 19.992C4.42567 19.9452 4.41113 19.8918 4.41113 19.8374V9.00531C4.41118 8.81944 4.45296 8.63595 4.53338 8.46838C4.61381 8.30081 4.73082 8.15343 4.8758 8.03711L4.88687 8.02849C4.91143 8.00927 4.93473 7.99235 4.95868 7.97617C4.99427 7.952 5.03107 7.92966 5.06893 7.90924L15.9317 2.11886C15.9766 2.09494 16.0268 2.08263 16.0777 2.08307C16.1285 2.0835 16.1785 2.09666 16.2229 2.12135L18.1757 3.20514C18.2236 3.23174 18.2634 3.27075 18.291 3.31809C18.3186 3.36542 18.333 3.41932 18.3325 3.47411ZM19.3644 8.1865C19.2935 8.10565 19.2123 8.03437 19.123 7.97449C19.1172 7.9705 19.1113 7.96652 19.1044 7.96202C19.0754 7.94312 19.0456 7.92546 19.0151 7.9091L8.15237 2.11881C8.10748 2.09489 8.05732 2.08258 8.00646 2.08302C7.9556 2.08345 7.90565 2.09661 7.86118 2.1213L5.90841 3.2051C5.86048 3.23168 5.82061 3.27069 5.793 3.31804C5.76538 3.36538 5.75106 3.4193 5.75152 3.4741C5.75199 3.52891 5.76723 3.58258 5.79564 3.62944C5.82405 3.67631 5.86458 3.71465 5.91296 3.74041L17.1027 9.70502C17.1183 9.7133 17.1344 9.72016 17.1508 9.7256L17.1886 9.74674V20.8781C17.1886 20.9312 17.2024 20.9833 17.2288 21.0294C17.2551 21.0754 17.293 21.1138 17.3387 21.1407C17.3844 21.1676 17.4364 21.1822 17.4894 21.1828C17.5424 21.1835 17.5947 21.1703 17.6411 21.1446L19.5161 20.1039C19.5637 20.0775 19.6033 20.0389 19.6309 19.9921C19.6584 19.9452 19.673 19.8918 19.673 19.8375V9.00531C19.6728 8.70398 19.5631 8.41297 19.3644 8.1865Z"
                                fill="#DFE4FF"/>
                            <path
                                d="M15.7309 6.42579C15.7309 7.19037 14.7932 7.74527 13.5011 7.74527C12.9742 7.74527 12.5064 7.65288 12.1369 7.49173C12.0897 7.47124 12.0386 7.46141 11.9872 7.46294C11.9358 7.46447 11.8853 7.47733 11.8395 7.50059C11.4544 7.69493 10.9438 7.80818 10.3607 7.80818C9.06864 7.80818 8.13086 7.25327 8.13086 6.4887C8.13086 6.10376 8.36861 5.77202 8.76958 5.53741C8.92755 5.44502 8.99388 5.24782 8.91564 5.0824C8.62984 4.47799 8.63903 3.91095 8.98956 3.56041C9.17111 3.37887 9.41973 3.28291 9.70863 3.28291C9.91159 3.28291 10.132 3.33087 10.3585 3.42091C10.4455 3.45561 10.5426 3.4547 10.629 3.41838C10.7153 3.38205 10.7839 3.31322 10.8199 3.22676C11.0526 2.67124 11.4377 2.3291 11.8994 2.3291C12.3533 2.3291 12.7332 2.65962 12.967 3.19849C13.0447 3.37737 13.2496 3.46273 13.4298 3.38834C13.6664 3.2907 13.897 3.23848 14.1086 3.23848C14.4736 3.23848 14.7011 3.38937 14.8277 3.51598C15.1723 3.86055 15.1871 4.41429 14.9161 5.00712C14.84 5.17343 14.9074 5.37021 15.0666 5.46016C15.483 5.69538 15.7309 6.03284 15.7309 6.42579Z"
                                fill="#687EFB"/>
                        </svg>
                    </div>
                    <div className={styles.billGiftTexts}>
                        <h3>Подарок для вас!</h3>
                        <p>Комиссия 0% на первую инвестицию</p>
                    </div>
                </div>
                <div className={styles.questionBlock}>
                    <div className={styles.tariffItemPercent}>Прибыль начисляется в сумах, но мы покроем разницу курса 👌</div>
                    <div className={styles.questionText} onClick={showModalAnswer}>
                        <img src="/light-bulb.svg" alt=""/>
                        Почему в сумах?
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.aimButton}
                    >
                        Пополнить
                    </button>
                    <button
                        type="button"
                        className={`${styles.aimButton} ${styles.other}`}
                    >
                        Перейти ко вкладу
                    </button>
                </div>
            </div>
        </Modal>

        <Modal
            openModal={modalAnswer}
            closeModal={() => setModalAnswer(false)}
        >
            <div className={styles.tariffBlock}>
                <div>
                    <div className={styles.answerImageBlock}>
                        <div className={styles.answerImage}>
                            <img src="/scales.png" alt=""/>
                        </div>
                    </div>
                    <h3 className={styles.answerTitle}>
                        По законодательству организации не могут зачислять прибыль в долларах
                    </h3>
                    <div className={styles.answerDesc} style={{opacity: .7}}>
                        Поэтому выплатим в суммах, но не волнуйтесь, мы покроем всю разницу по курсу ЦБ на момент выплаты
                    </div>
                    <div className={styles.answerDesc}>Расходы на нас 👌</div>
                </div>

                <button
                    type="button"
                    className={styles.aimButton}
                    onClick={() => setModalAnswer(false)}
                >
                    Понятно
                </button>
            </div>
        </Modal>
    </>
}

export default add
