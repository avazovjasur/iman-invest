import styles from '../../styles/modules/bill.module.scss'
import PaymentDrawer from "@/components/PaymentDrawer"
import { useRef, useState } from 'react';
import Link from 'next/link';

const lang = () => {
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [cvv, setCvv] = useState('');

  const handleMonthInput = () => {
    if (monthRef.current.value.length === 2) {
      yearRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      if (numericValue <= 999 && numericValue >= 100) {
        setCvv(value);
      } else if (numericValue > 999) {
        setCvv('999');
      } else if (numericValue < 100 && value.length === 3) {
        setCvv('100');
      } else {
        setCvv(value);
      }
    } else {
      setCvv('');
    }
  };

  return <div className={styles.container}>
    <div className={styles.billsHeader}>
      <Link href="/home">
        <button className={styles.billsHeaderButton}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L4 8L11 15" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Link>
      <h3 className={styles.billsHeaderTitle}>Выберите условия</h3>
    </div>
    <div className={styles.content}>
      <form className={styles.contentForm}>
        <label htmlFor="target">
          <h3 className={styles.contentTitle}>Выберите цель</h3>
          <div className={styles.contentFormBox}>
            <div className={styles.contentFormInput} >
              <span>Цель</span>
              <input id='target' type="text" placeholder='Например: Машина' />
            </div>
            <div className={styles.contentFormItem}>
              🏎
            </div>
          </div>
        </label>
        <label htmlFor="price">
          <h3 className={styles.contentTitle}>Начать с суммы</h3>
          <div className={styles.contentFormBox}>
            <div className={styles.contentFormInput} >
              <span>Сумма</span>
              <input
                id='price'
                type="text"
                placeholder='1 000 000'
                inputMode="numeric"
                pattern="[0-9]*"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />            </div>
          </div>
          <span className={styles.contentFormNotice}>Минимум 500 000 сум</span>
        </label>
        <label htmlFor="time">
          <h3 className={styles.contentTitle}>Выберите срок</h3>
          <div className={styles.contentFormBlock}>
            <div className={styles.contentFormList}>
              <div className={styles.contentFormListItem}>12 мес</div>
              <div className={styles.contentFormListItem}>18 мес</div>
              <div className={`${styles.contentFormListItem} ${styles.active}`}>24 мес</div>
            </div>
            <div className={styles.contentFormPersentage}>~0%</div>
          </div>
        </label>
        <div>
          <h3 className={styles.contentTitle}>Пополнить с помощью</h3>
          <div className={styles.billList}>
            <button type='button' className={styles.billListItem}>
              <div className={styles.billListItemIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_4664_5026)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.94014 0.483691C8.58868 0.0783524 9.41159 0.0783537 10.0601 0.483691L17.5301 5.15244C17.9985 5.44515 18.1408 6.0621 17.8481 6.53044C17.5554 6.99878 16.9385 7.14115 16.4701 6.84844L9.00013 2.17969L1.53013 6.84844C1.0618 7.14115 0.444846 6.99878 0.152136 6.53044C-0.140575 6.0621 0.00179839 5.44515 0.470135 5.15244L7.94014 0.483691ZM2.00013 10.0004C2.00013 9.44815 2.44785 9.00044 3.00013 9.00044C3.55242 9.00044 4.00013 9.44815 4.00013 10.0004V13.0004C4.00013 13.5527 3.55242 14.0004 3.00013 14.0004C2.44785 14.0004 2.00013 13.5527 2.00013 13.0004V10.0004ZM1.00013 17.0004C1.00013 16.4482 1.44785 16.0004 2.00013 16.0004H16.0001C16.5524 16.0004 17.0001 16.4482 17.0001 17.0004C17.0001 17.5527 16.5524 18.0004 16.0001 18.0004H2.00013C1.44785 18.0004 1.00013 17.5527 1.00013 17.0004ZM11.0001 9.00044C10.4478 9.00044 10.0001 9.44815 10.0001 10.0004V13.0004C10.0001 13.5527 10.4478 14.0004 11.0001 14.0004C11.5524 14.0004 12.0001 13.5527 12.0001 13.0004V10.0004C12.0001 9.44815 11.5524 9.00044 11.0001 9.00044ZM6.00013 10.0004C6.00013 9.44815 6.44785 9.00044 7.00013 9.00044C7.55242 9.00044 8.00013 9.44815 8.00013 10.0004V13.0004C8.00013 13.5527 7.55242 14.0004 7.00013 14.0004C6.44785 14.0004 6.00013 13.5527 6.00013 13.0004V10.0004ZM15.0001 9.00044C14.4478 9.00044 14.0001 9.44815 14.0001 10.0004V13.0004C14.0001 13.5527 14.4478 14.0004 15.0001 14.0004C15.5524 14.0004 16.0001 13.5527 16.0001 13.0004V10.0004C16.0001 9.44815 15.5524 9.00044 15.0001 9.00044ZM7.00013 5.00044C6.44785 5.00044 6.00013 5.44816 6.00013 6.00044C6.00013 6.55272 6.44785 7.00044 7.00013 7.00044H11.0001C11.5524 7.00044 12.0001 6.55272 12.0001 6.00044C12.0001 5.44816 11.5524 5.00044 11.0001 5.00044H7.00013Z" fill="#6F49FE" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.94014 0.483691C8.58868 0.0783524 9.41159 0.0783537 10.0601 0.483691L17.5301 5.15244C17.9985 5.44515 18.1408 6.0621 17.8481 6.53044C17.5554 6.99878 16.9385 7.14115 16.4701 6.84844L9.00013 2.17969L1.53013 6.84844C1.0618 7.14115 0.444846 6.99878 0.152136 6.53044C-0.140575 6.0621 0.00179839 5.44515 0.470135 5.15244L7.94014 0.483691ZM2.00013 10.0004C2.00013 9.44815 2.44785 9.00044 3.00013 9.00044C3.55242 9.00044 4.00013 9.44815 4.00013 10.0004V13.0004C4.00013 13.5527 3.55242 14.0004 3.00013 14.0004C2.44785 14.0004 2.00013 13.5527 2.00013 13.0004V10.0004ZM1.00013 17.0004C1.00013 16.4482 1.44785 16.0004 2.00013 16.0004H16.0001C16.5524 16.0004 17.0001 16.4482 17.0001 17.0004C17.0001 17.5527 16.5524 18.0004 16.0001 18.0004H2.00013C1.44785 18.0004 1.00013 17.5527 1.00013 17.0004ZM11.0001 9.00044C10.4478 9.00044 10.0001 9.44815 10.0001 10.0004V13.0004C10.0001 13.5527 10.4478 14.0004 11.0001 14.0004C11.5524 14.0004 12.0001 13.5527 12.0001 13.0004V10.0004C12.0001 9.44815 11.5524 9.00044 11.0001 9.00044ZM6.00013 10.0004C6.00013 9.44815 6.44785 9.00044 7.00013 9.00044C7.55242 9.00044 8.00013 9.44815 8.00013 10.0004V13.0004C8.00013 13.5527 7.55242 14.0004 7.00013 14.0004C6.44785 14.0004 6.00013 13.5527 6.00013 13.0004V10.0004ZM15.0001 9.00044C14.4478 9.00044 14.0001 9.44815 14.0001 10.0004V13.0004C14.0001 13.5527 14.4478 14.0004 15.0001 14.0004C15.5524 14.0004 16.0001 13.5527 16.0001 13.0004V10.0004C16.0001 9.44815 15.5524 9.00044 15.0001 9.00044ZM7.00013 5.00044C6.44785 5.00044 6.00013 5.44816 6.00013 6.00044C6.00013 6.55272 6.44785 7.00044 7.00013 7.00044H11.0001C11.5524 7.00044 12.0001 6.55272 12.0001 6.00044C12.0001 5.44816 11.5524 5.00044 11.0001 5.00044H7.00013Z" fill="#8183F8" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.94014 0.483691C8.58868 0.0783524 9.41159 0.0783537 10.0601 0.483691L17.5301 5.15244C17.9985 5.44515 18.1408 6.0621 17.8481 6.53044C17.5554 6.99878 16.9385 7.14115 16.4701 6.84844L9.00013 2.17969L1.53013 6.84844C1.0618 7.14115 0.444846 6.99878 0.152136 6.53044C-0.140575 6.0621 0.00179839 5.44515 0.470135 5.15244L7.94014 0.483691ZM2.00013 10.0004C2.00013 9.44815 2.44785 9.00044 3.00013 9.00044C3.55242 9.00044 4.00013 9.44815 4.00013 10.0004V13.0004C4.00013 13.5527 3.55242 14.0004 3.00013 14.0004C2.44785 14.0004 2.00013 13.5527 2.00013 13.0004V10.0004ZM1.00013 17.0004C1.00013 16.4482 1.44785 16.0004 2.00013 16.0004H16.0001C16.5524 16.0004 17.0001 16.4482 17.0001 17.0004C17.0001 17.5527 16.5524 18.0004 16.0001 18.0004H2.00013C1.44785 18.0004 1.00013 17.5527 1.00013 17.0004ZM11.0001 9.00044C10.4478 9.00044 10.0001 9.44815 10.0001 10.0004V13.0004C10.0001 13.5527 10.4478 14.0004 11.0001 14.0004C11.5524 14.0004 12.0001 13.5527 12.0001 13.0004V10.0004C12.0001 9.44815 11.5524 9.00044 11.0001 9.00044ZM6.00013 10.0004C6.00013 9.44815 6.44785 9.00044 7.00013 9.00044C7.55242 9.00044 8.00013 9.44815 8.00013 10.0004V13.0004C8.00013 13.5527 7.55242 14.0004 7.00013 14.0004C6.44785 14.0004 6.00013 13.5527 6.00013 13.0004V10.0004ZM15.0001 9.00044C14.4478 9.00044 14.0001 9.44815 14.0001 10.0004V13.0004C14.0001 13.5527 14.4478 14.0004 15.0001 14.0004C15.5524 14.0004 16.0001 13.5527 16.0001 13.0004V10.0004C16.0001 9.44815 15.5524 9.00044 15.0001 9.00044ZM7.00013 5.00044C6.44785 5.00044 6.00013 5.44816 6.00013 6.00044C6.00013 6.55272 6.44785 7.00044 7.00013 7.00044H11.0001C11.5524 7.00044 12.0001 6.55272 12.0001 6.00044C12.0001 5.44816 11.5524 5.00044 11.0001 5.00044H7.00013Z" fill="#3680FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4664_5026">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.billListItemTexts}>
                <h3>Банковский перевод</h3>
                <p>Перевод средств через любой банк</p>
              </div>
              <div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.2">
                    <path d="M3 1L8 6L3 11" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </button>
            <button type='button' className={styles.billListItem}>
              <div className={styles.billListItemIcon}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_4664_5048)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44771 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55229 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z" fill="#6F49FE" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44771 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55229 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z" fill="#8183F8" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44771 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55229 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z" fill="#3680FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4664_5048">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.billListItemTexts}>
                <h3>Другие способы оплаты</h3>
                <p>Карты и другие сервисы</p>
              </div>
              <div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.2">
                    <path d="M3 1L8 6L3 11" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div className={styles.billGift}>
            <div className={styles.billGiftIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1467 18.2412L12.8077 23.4246C12.3596 23.6733 11.6265 23.6733 11.1785 23.4246L1.83948 18.2412C1.61547 18.1169 1.50348 17.953 1.50348 17.7891H1.4043V6.20996H22.4827V17.7891C22.4827 17.953 22.3707 18.1169 22.1467 18.2412Z" fill="#4059E6" />
                <path d="M22.4833 6.21001V17.7892C22.4833 17.9531 22.3713 18.117 22.1473 18.2413L12.8082 23.4247C12.5753 23.5539 12.2653 23.6155 11.9583 23.6102C11.9656 17.812 12.1304 12.0065 11.9502 6.20996L22.4833 6.21001Z" fill="#6E84FF" />
                <path d="M11.1789 11.8461L1.83993 6.66274C1.3919 6.41407 1.3919 6.00719 1.83993 5.75852L11.1789 0.575176C11.627 0.326504 12.3601 0.326504 12.8081 0.575176L22.1471 5.75857C22.5951 6.00724 22.5951 6.41411 22.1471 6.66278L12.8081 11.8461C12.3601 12.0948 11.627 12.0948 11.1789 11.8461Z" fill="#CEFFC8" />
                <path d="M11.1789 11.8461L1.83993 6.66274C1.3919 6.41407 1.3919 6.00719 1.83993 5.75852L11.1789 0.575176C11.627 0.326504 12.3601 0.326504 12.8081 0.575176L22.1471 5.75857C22.5951 6.00724 22.5951 6.41411 22.1471 6.66278L12.8081 11.8461C12.3601 12.0948 11.627 12.0948 11.1789 11.8461Z" fill="#FFD7AD" />
                <path d="M11.1789 11.8461L1.83993 6.66274C1.3919 6.41407 1.3919 6.00719 1.83993 5.75852L11.1789 0.575176C11.627 0.326504 12.3601 0.326504 12.8081 0.575176L22.1471 5.75857C22.5951 6.00724 22.5951 6.41411 22.1471 6.66278L12.8081 11.8461C12.3601 12.0948 11.627 12.0948 11.1789 11.8461Z" fill="#9BAAFF" />
                <path d="M18.3325 3.47411C18.332 3.52891 18.3168 3.58256 18.2884 3.62943C18.26 3.67629 18.2195 3.71463 18.1712 3.74041L6.98143 9.70502C6.96602 9.71323 6.94993 9.7201 6.93334 9.72555L6.89551 9.74669V20.8781C6.89551 20.9311 6.88167 20.9833 6.85534 21.0293C6.82901 21.0754 6.79112 21.1138 6.74541 21.1407C6.6997 21.1676 6.64775 21.1821 6.5947 21.1828C6.54166 21.1835 6.48936 21.1703 6.44298 21.1445L4.56798 20.1039C4.52044 20.0775 4.48083 20.0389 4.45325 19.992C4.42567 19.9452 4.41113 19.8918 4.41113 19.8374V9.00531C4.41118 8.81944 4.45296 8.63595 4.53338 8.46838C4.61381 8.30081 4.73082 8.15343 4.8758 8.03711L4.88687 8.02849C4.91143 8.00927 4.93473 7.99235 4.95868 7.97617C4.99427 7.952 5.03107 7.92966 5.06893 7.90924L15.9317 2.11886C15.9766 2.09494 16.0268 2.08263 16.0777 2.08307C16.1285 2.0835 16.1785 2.09666 16.2229 2.12135L18.1757 3.20514C18.2236 3.23174 18.2634 3.27075 18.291 3.31809C18.3186 3.36542 18.333 3.41932 18.3325 3.47411ZM19.3644 8.1865C19.2935 8.10565 19.2123 8.03437 19.123 7.97449C19.1172 7.9705 19.1113 7.96652 19.1044 7.96202C19.0754 7.94312 19.0456 7.92546 19.0151 7.9091L8.15237 2.11881C8.10748 2.09489 8.05732 2.08258 8.00646 2.08302C7.9556 2.08345 7.90565 2.09661 7.86118 2.1213L5.90841 3.2051C5.86048 3.23168 5.82061 3.27069 5.793 3.31804C5.76538 3.36538 5.75106 3.4193 5.75152 3.4741C5.75199 3.52891 5.76723 3.58258 5.79564 3.62944C5.82405 3.67631 5.86458 3.71465 5.91296 3.74041L17.1027 9.70502C17.1183 9.7133 17.1344 9.72016 17.1508 9.7256L17.1886 9.74674V20.8781C17.1886 20.9312 17.2024 20.9833 17.2288 21.0294C17.2551 21.0754 17.293 21.1138 17.3387 21.1407C17.3844 21.1676 17.4364 21.1822 17.4894 21.1828C17.5424 21.1835 17.5947 21.1703 17.6411 21.1446L19.5161 20.1039C19.5637 20.0775 19.6033 20.0389 19.6309 19.9921C19.6584 19.9452 19.673 19.8918 19.673 19.8375V9.00531C19.6728 8.70398 19.5631 8.41297 19.3644 8.1865Z" fill="#DFE4FF" />
                <path d="M15.7309 6.42579C15.7309 7.19037 14.7932 7.74527 13.5011 7.74527C12.9742 7.74527 12.5064 7.65288 12.1369 7.49173C12.0897 7.47124 12.0386 7.46141 11.9872 7.46294C11.9358 7.46447 11.8853 7.47733 11.8395 7.50059C11.4544 7.69493 10.9438 7.80818 10.3607 7.80818C9.06864 7.80818 8.13086 7.25327 8.13086 6.4887C8.13086 6.10376 8.36861 5.77202 8.76958 5.53741C8.92755 5.44502 8.99388 5.24782 8.91564 5.0824C8.62984 4.47799 8.63903 3.91095 8.98956 3.56041C9.17111 3.37887 9.41973 3.28291 9.70863 3.28291C9.91159 3.28291 10.132 3.33087 10.3585 3.42091C10.4455 3.45561 10.5426 3.4547 10.629 3.41838C10.7153 3.38205 10.7839 3.31322 10.8199 3.22676C11.0526 2.67124 11.4377 2.3291 11.8994 2.3291C12.3533 2.3291 12.7332 2.65962 12.967 3.19849C13.0447 3.37737 13.2496 3.46273 13.4298 3.38834C13.6664 3.2907 13.897 3.23848 14.1086 3.23848C14.4736 3.23848 14.7011 3.38937 14.8277 3.51598C15.1723 3.86055 15.1871 4.41429 14.9161 5.00712C14.84 5.17343 14.9074 5.37021 15.0666 5.46016C15.483 5.69538 15.7309 6.03284 15.7309 6.42579Z" fill="#687EFB" />
              </svg>
            </div>
            <div className={styles.billGiftTexts}>
              <h3>Подарок для вас!</h3>
              <p>Комиссия 0% на первую инвестицию</p>
            </div>
            <span className={styles.billGiftTime}>
              <div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_4664_5010)">
                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" fill="#4059E6" stroke="#4059E6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.5 4V6.5H8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4664_5010">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3>00:12:12</h3>
            </span>
          </div>
        </div>
        <div>
          <h3 className={styles.contentTitle}>Итого:</h3>
          <div className={styles.totalList}>
            <div className={styles.totalListItem}>
              <div className={styles.totalListItemTop}>
                <h3>0 сум</h3>
                <h3>~0%</h3>
              </div>
              <h3 className={styles.totalListItemTitle}>
                Ваш доход
              </h3>
            </div>
            <div className={styles.totalListItem}>
              <div className={styles.totalOther}>
                <div className={styles.totalOtherTexts}>
                  <h3>Капитализация</h3>
                  <p>Прибыль увеличивается, потому что находятся в обороте</p>
                </div>
                <div>
                  <label className={styles.totalOtherCheckbox} htmlFor="cap">
                    <input type="checkbox" name="cap" id="cap" />
                  </label>
                </div>
              </div>
            </div>
            <button className={styles.totalButton}>Начать копить</button>
            <span className={styles.totalText}>*Расчёт примерный и носит справочный характер</span>
          </div>
        </div>
      </form>
      <div className={styles.features}>
        <ul className={styles.featuresList}>
          <li className={styles.featuresListItem}>
            <div className={styles.featuresListItemIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V2C3.34315 2 2 3.34315 2 5V7V9V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V9V7V5C18 3.34315 16.6569 2 15 2V1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0ZM13 4H7C7 4.55228 6.55228 5 6 5C5.44772 5 5 4.55228 5 4C4.44772 4 4 4.44772 4 5V7L16 7V5C16 4.44772 15.5523 4 15 4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4ZM4 15V9L16 9V15C16 15.5523 15.5523 16 15 16H5C4.44772 16 4 15.5523 4 15Z" fill="#1E468C" />
                </g>
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 2C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.31607 3.44129 0 4.20435 0 5V11C0 11.7956 0.31607 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H4V15C4 15.7956 4.31607 16.5587 4.87868 17.1213C5.44129 17.6839 6.20435 18 7 18H17C17.7957 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7957 20 15V9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.5587 6.31607 17.7957 6 17 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H3ZM14 6V5C14 4.73478 13.8946 4.48043 13.7071 4.29289C13.5196 4.10536 13.2652 4 13 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V11C2 11.2652 2.10536 11.5196 2.29289 11.7071C2.48043 11.8946 2.73478 12 3 12H4V9C4 8.20435 4.31607 7.44129 4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6H14ZM6 13V9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8H15H17C17.2652 8 17.5196 8.10536 17.7071 8.29289C17.8946 8.48043 18 8.73478 18 9V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H7C6.73478 16 6.48043 15.8946 6.29289 15.7071C6.10536 15.5196 6 15.2652 6 15V13ZM9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.7957 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2043 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2043 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z" fill="#1E468C" fillOpacity="0.5" />
              </svg>
            </div>
            <div className={styles.featuresListItemTexts}>
              <h3>Ежемесячные выплаты</h3>
              <p>Получайте доход каждый месяц</p>
            </div>
          </li>
          <li className={styles.featuresListItem}>
            <div className={styles.featuresListItemIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4633_6136)">
                  <path d="M17.4998 11.5717L9.99981 18.9997L2.49981 11.5717C2.00512 11.0903 1.61546 10.5117 1.35536 9.87232C1.09527 9.23295 0.970374 8.54664 0.98855 7.85662C1.00673 7.1666 1.16758 6.48782 1.46097 5.86303C1.75436 5.23823 2.17395 4.68094 2.6933 4.22627C3.21265 3.77159 3.82052 3.42938 4.47862 3.22117C5.13673 3.01296 5.83082 2.94327 6.51718 3.01649C7.20354 3.08971 7.86731 3.30425 8.46669 3.64659C9.06606 3.98894 9.58806 4.45169 9.99981 5.00569C10.4133 4.45571 10.9359 3.99701 11.5349 3.65829C12.1339 3.31958 12.7963 3.10814 13.4807 3.03721C14.1652 2.96628 14.8569 3.03739 15.5126 3.24608C16.1683 3.45477 16.7738 3.79656 17.2914 4.25005C17.8089 4.70354 18.2272 5.25897 18.5202 5.88158C18.8132 6.50419 18.9746 7.18057 18.9941 7.8684C19.0137 8.55622 18.8911 9.24068 18.6339 9.87894C18.3768 10.5172 17.9907 11.0955 17.4998 11.5777" stroke="#1E468C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.99985 5L6.70685 8.293C6.51938 8.48053 6.41406 8.73484 6.41406 9C6.41406 9.26516 6.51938 9.51947 6.70685 9.707L7.24985 10.25C7.93985 10.94 9.05985 10.94 9.74985 10.25L10.7498 9.25C11.3466 8.65327 12.1559 8.31803 12.9998 8.31803C13.8438 8.31803 14.6531 8.65327 15.2498 9.25L17.4998 11.5" stroke="#1E468C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.5 14.5L12.5 16.5" stroke="#1E468C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 12L15 14" stroke="#1E468C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4633_6136">
                    <rect width="20" height="20" fill="white" />
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4633_6146)">
                  <path d="M9.99983 1C12.3357 3.06658 15.3843 4.14257 18.4998 4C18.9534 5.54302 19.0922 7.16147 18.908 8.75918C18.7237 10.3569 18.2202 11.9013 17.4272 13.3005C16.6343 14.6998 15.5682 15.9254 14.2923 16.9045C13.0164 17.8836 11.5566 18.5962 9.99983 19C8.44305 18.5962 6.98331 17.8836 5.70738 16.9045C4.43144 15.9254 3.36534 14.6998 2.57243 13.3005C1.77952 11.9013 1.27597 10.3569 1.09171 8.75918C0.907451 7.16147 1.04624 5.54302 1.49983 4C4.61536 4.14257 7.664 3.06658 9.99983 1Z" stroke="#1E468C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 10L9 12L13 8" stroke="#1E468C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4633_6146">
                    <rect width="20" height="20" fill="white" />
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
      <div className={styles.privacy}>
        Нажимая на кнопку, вы соглашаетесь с условиями <a href="#">Публичной оферты</a>  и Обработку <a href="#"> персональных данных</a>
      </div>
    </div>
    <div className={styles.payment}>
      <div className={styles.paymentBox}>
        {/* <div className={styles.paymentContent}>
            <div className={styles.paymentHeader}>
              <h2 className={styles.paymentTitle}>
            Пополнить с помощью
              </h2>
            </div>
          <ul className={styles.paymentList}>
            <li>
              <label className={styles.paymentListItem} htmlFor="1">
                <div className={styles.paymentListItemIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4565_31689)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.94014 0.483691C8.58868 0.0783524 9.41159 0.0783537 10.0601 0.483691L17.5301 5.15244C17.9985 5.44515 18.1408 6.0621 17.8481 6.53044C17.5554 6.99878 16.9385 7.14115 16.4701 6.84844L9.00013 2.17969L1.53013 6.84844C1.0618 7.14115 0.444846 6.99878 0.152136 6.53044C-0.140575 6.0621 0.0017984 5.44515 0.470135 5.15244L7.94014 0.483691ZM2.00013 10.0004C2.00013 9.44815 2.44785 9.00044 3.00013 9.00044C3.55242 9.00044 4.00013 9.44816 4.00013 10.0004V13.0004C4.00013 13.5527 3.55242 14.0004 3.00013 14.0004C2.44785 14.0004 2.00013 13.5527 2.00013 13.0004V10.0004ZM1.00013 17.0004C1.00013 16.4482 1.44785 16.0004 2.00013 16.0004H16.0001C16.5524 16.0004 17.0001 16.4482 17.0001 17.0004C17.0001 17.5527 16.5524 18.0004 16.0001 18.0004H2.00013C1.44785 18.0004 1.00013 17.5527 1.00013 17.0004ZM11.0001 9.00044C10.4478 9.00044 10.0001 9.44815 10.0001 10.0004V13.0004C10.0001 13.5527 10.4478 14.0004 11.0001 14.0004C11.5524 14.0004 12.0001 13.5527 12.0001 13.0004V10.0004C12.0001 9.44816 11.5524 9.00044 11.0001 9.00044ZM6.00013 10.0004C6.00013 9.44815 6.44785 9.00044 7.00013 9.00044C7.55242 9.00044 8.00013 9.44816 8.00013 10.0004V13.0004C8.00013 13.5527 7.55242 14.0004 7.00013 14.0004C6.44785 14.0004 6.00013 13.5527 6.00013 13.0004V10.0004ZM15.0001 9.00044C14.4478 9.00044 14.0001 9.44815 14.0001 10.0004V13.0004C14.0001 13.5527 14.4478 14.0004 15.0001 14.0004C15.5524 14.0004 16.0001 13.5527 16.0001 13.0004V10.0004C16.0001 9.44816 15.5524 9.00044 15.0001 9.00044ZM7.00013 5.00044C6.44785 5.00044 6.00013 5.44816 6.00013 6.00044C6.00013 6.55272 6.44785 7.00044 7.00013 7.00044H11.0001C11.5524 7.00044 12.0001 6.55272 12.0001 6.00044C12.0001 5.44816 11.5524 5.00044 11.0001 5.00044H7.00013Z" fill="#040415" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4565_31689">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>Банковский перевод</h3>
                  <p>Перевод на счёт</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <input type="radio" name="payment" id="1" />
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="2" className={styles.paymentListItem}>
                <div className={`${styles.paymentListItemIcon} ${styles.main}`}>
                  <h3>ипак</h3>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>
                    <span>
                      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="8" r="2" fill="#040415" />
                        <circle cx="9" cy="8" r="2" fill="#040415" />
                      </svg>
                    </span>
                    6289</h3>
                  <p>Недавно использовали</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <input type="radio" name="payment" id="2" />
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="3" className={styles.paymentListItem}>
                <div className={`${styles.paymentListItemIcon} ${styles.main}`}>
                  <h3>ипак</h3>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>
                    <span>
                      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="8" r="2" fill="#040415" />
                        <circle cx="9" cy="8" r="2" fill="#040415" />
                      </svg>
                    </span>
                    6289</h3>
                  <p>Недавно использовали</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <input type="radio" name="payment" id="3" />
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="4" className={styles.paymentListItem}>
                <div className={`${styles.paymentListItemIcon} ${styles.main}`}>
                  <h3>ипак</h3>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>
                    <span>
                      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="8" r="2" fill="#040415" />
                        <circle cx="9" cy="8" r="2" fill="#040415" />
                      </svg>
                    </span>
                    Payme</h3>
                  <p>Добавлена 21.06.2024</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <input type="radio" name="payment" id="4" />
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="5" className={styles.paymentListItem}>
                <div className={`${styles.paymentListItemIcon} ${styles.main}`}>
                  <h3>ипак</h3>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>
                    <span>
                      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="8" r="2" fill="#040415" />
                        <circle cx="9" cy="8" r="2" fill="#040415" />
                      </svg>
                    </span>
                    6289</h3>
                  <p>Добавлена 21.06.2024</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <input type="radio" name="payment" id="5" />
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="6" className={styles.paymentListItem}>
                <div className={`${styles.paymentListItemIcon} ${styles.main}`}>
                  <h3>ипак</h3>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>
                    <span>
                      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="8" r="2" fill="#040415" />
                        <circle cx="9" cy="8" r="2" fill="#040415" />
                      </svg>
                    </span>
                    6289</h3>
                  <p className={styles.error}>Карта заблокирована</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <input type="radio" name="payment" id="6" />
                </div>
              </label>
            </li>
            <li>
              <button className={styles.paymentListItem}>
                <div className={styles.paymentListItemIcon}>
                  <svg className={styles.plus} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4565_31774)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44771 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55229 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z" fill="#040415" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4565_31774">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.paymentListItemTexts}>
                  <h3>Добавить новую</h3>
                  <p>Карта для пополнения</p>
                </div>
                <div className={styles.paymentListItemInput}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M3 1L8 6L3 11" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </button>
            </li>
          </ul>
        </div> */}
        <div className={styles.card}>
          <div className={styles.paymentHeader}>
            <h2 className={styles.paymentTitle}>
              Добавление карты
            </h2>
            <p className={styles.paymentSubTitle}>Мы не будем списывать деньги без вашего согласия</p>
          </div>
          <form className={styles.cardForm}>
            <div className={styles.cardFormInput} >
              <span>Номер карты</span>
              <input id='card' type="number" placeholder='8399 9005 8499 4033' />
              <button type='button' className={styles.cardFormInputIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H8V3H5C3.89543 3 3 3.89543 3 5V8H1V5ZM1 17C1 19.2091 2.79086 21 5 21H8V19H5C3.89543 19 3 18.1046 3 17V14H1V17ZM17 1C19.2091 1 21 2.79086 21 5V8H19V5C19 3.89543 18.1046 3 17 3H14V1H17ZM21 17C21 19.2091 19.2091 21 17 21H14V19H17C18.1046 19 19 18.1046 19 17V14H21V17ZM21 10H1V12H21V10Z" fill="#040415" />
                </svg>
              </button>
            </div>
            <div className={styles.cardFormBox}>
              <div className={`${styles.cardFormInput} ${styles.cardFormInputHalf}`} >
                <span>Срок действия</span>
                <div className={styles.inputGroup}>
                  <input
                    type="number"
                    id="expiry-month"
                    maxLength="2"
                    placeholder="MM"
                    ref={monthRef}
                    onInput={handleMonthInput}
                    onKeyDown={(e) => {
                      if (e.target.value.length >= 2 && e.key !== 'Backspace') {
                        e.preventDefault();
                      }
                    }}
                  />
                  <span>|</span>
                  <input
                    type="number"
                    id="expiry-year"
                    maxLength="2"
                    placeholder="YY"
                    ref={yearRef}
                    onKeyDown={(e) => {
                      if (e.target.value.length >= 2 && e.key !== 'Backspace') {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
              </div>
              <div className={`${styles.cardFormInput} ${styles.cardFormInputHalf}`} >
                <input
                  value={cvv}
                  onChange={handleInputChange}
                  min="100"
                  max="999"
                  id='cvv'
                  type="number"
                  placeholder='CVC/CVV' />
              </div>
            </div>
            <button className={styles.cardFormButton} type='button'>
              Добавить
            </button>
          </form>
        </div>
      </div>
      <div className={styles.paymentEnd}>
        <div className={styles.paymentEndBox}>
          <div className={styles.paymentEndBoxIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4565_32166)">
                <path d="M8.16699 14.0003L14.0003 19.8337L25.667 8.16699" stroke="#040415" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.33301 14.0003L8.16634 19.8337M13.9997 14.0003L19.833 8.16699" stroke="#040415" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4565_32166">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3>Деньги зачислены!</h3>
          <p>
            Ваш счёт успешно пополнен <br />
            на сумму 150 000 сум
          </p>
        </div>
        <div className={styles.paymentEndInfo}>
          <div className={styles.paymentEndInfoIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4565_32178)">
                <path d="M2 10C2 11.0506 2.20693 12.0909 2.60896 13.0615C3.011 14.0321 3.60028 14.914 4.34315 15.6569C5.08601 16.3997 5.96793 16.989 6.93853 17.391C7.90914 17.7931 8.94943 18 10 18C11.0506 18 12.0909 17.7931 13.0615 17.391C14.0321 16.989 14.914 16.3997 15.6569 15.6569C16.3997 14.914 16.989 14.0321 17.391 13.0615C17.7931 12.0909 18 11.0506 18 10C18 8.94943 17.7931 7.90914 17.391 6.93853C16.989 5.96793 16.3997 5.08601 15.6569 4.34315C14.914 3.60028 14.0321 3.011 13.0615 2.60896C12.0909 2.20693 11.0506 2 10 2C8.94943 2 7.90914 2.20693 6.93853 2.60896C5.96793 3.011 5.08601 3.60028 4.34315 4.34315C3.60028 5.08601 3.011 5.96793 2.60896 6.93853C2.20693 7.90914 2 8.94943 2 10Z" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 6V11" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14V14.0083" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4565_32178">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.paymentEndInfoTexts}>
            <h3>Важно!</h3>
            <p>Чтобы прибль начала начисляться, Вам необходимо заполнить форму</p>
          </div>
        </div>
        <button type='button' className={`${styles.cardFormButton} ${styles.paymentEndButton}`}>
          Заполнить форму
        </button>
      </div>
    </div>
    {/* <PaymentDrawer /> */}
  </div>
}

export default lang