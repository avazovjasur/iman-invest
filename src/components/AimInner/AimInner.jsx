import styles from './AimInner.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import dynamic from "next/dynamic";
import { useSelector } from 'react-redux';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AimInner = ({ investmentId }) => {
  const [isCapActive, setIsCapActive] = useState(false);
  const [isAutoActive, setIsAutoActive] = useState(false);
  const [investment, setInvestment] = useState(null)
  const investments = useSelector((state) => state.otp.investments);

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const handleCapCheckboxChange = () => {
    setIsCapActive(!isCapActive);
  };

  const handleAutoCheckboxChange = () => {
    setIsAutoActive(!isAutoActive);
  };

  useState(() => {
    console.log(investmentId)
    investments.forEach(el => {
      if (el.guid === investmentId) {
        setInvestment(el)
      }
    });
    console.log('investments', investments);
  }, [investmentId])

  const option = {
    chart: {
      id: 'apexchart-example',
      toolbar: {
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    },
    xaxis: {
      categories: ['Фев 2024', '', '', '', 'Сегодня'],
      labels: {
        style: {
          fontSize: '10px',
          colors: '#4E5A8C',
          fontWeight: '500',
        },
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
  }

  const series = [{
    name: 'graph',
    data: [10, 41, 69, 91, 150]
  }]

  return <>
    <div className={styles.top}>
      <Link href="/home">
        <button type="button" className={styles.topButton}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Link>
      <div className={styles.topContent}>
        <div className={styles.topContentHeader}>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4852_6548)">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.7931 3.00905e-05C14.1831 3.00905e-05 14.5001 0.31703 14.5001 0.70703V2.00003H15.7931C15.933 2 16.0697 2.04145 16.186 2.11913C16.3023 2.19682 16.3929 2.30725 16.4464 2.43645C16.5 2.56566 16.514 2.70784 16.4867 2.845C16.4594 2.98216 16.392 3.10815 16.2931 3.20703L14.8331 4.66703C14.6199 4.87973 14.3313 4.99945 14.0301 5.00003H12.5601L9.03011 8.53003C8.88794 8.66251 8.69989 8.73463 8.50559 8.73121C8.31129 8.72778 8.1259 8.64907 7.98849 8.51165C7.85108 8.37424 7.77237 8.18885 7.76894 7.99455C7.76551 7.80025 7.83763 7.6122 7.97011 7.47003L11.5001 3.94003V2.47003C11.5001 2.16903 11.6201 1.88003 11.8331 1.66603L13.2931 0.20603C13.3585 0.140071 13.4365 0.0877983 13.5223 0.0522589C13.6081 0.0167196 13.7002 -0.00137496 13.7931 -0.00096991M3.00011 8.00003C3.00001 7.18457 3.18123 6.37928 3.53067 5.64248C3.88011 4.90568 4.38901 4.25581 5.02054 3.73991C5.65207 3.224 6.39041 2.85499 7.18211 2.65957C7.97382 2.46416 8.79907 2.44723 9.59811 2.61003C9.79204 2.64703 9.99273 2.60608 10.1567 2.49606C10.3206 2.38604 10.4345 2.21582 10.4737 2.02233C10.513 1.82884 10.4743 1.62769 10.3662 1.46252C10.258 1.29735 10.0891 1.18147 9.89611 1.14003C8.42178 0.840283 6.8901 1.02352 5.52808 1.66258C4.16606 2.30165 3.04618 3.36253 2.33441 4.688C1.62263 6.01348 1.35685 7.53301 1.57644 9.02139C1.79603 10.5098 2.48931 11.8878 3.55354 12.9513C4.61777 14.0147 5.9963 14.707 7.48485 14.9255C8.97339 15.144 10.4927 14.8771 11.8177 14.1643C13.1426 13.4516 14.2027 12.3309 14.8408 10.9684C15.4788 9.60595 15.6609 8.07414 15.3601 6.60003C15.3205 6.4051 15.205 6.2339 15.0391 6.12409C14.8732 6.01429 14.6705 5.97488 14.4756 6.01453C14.2807 6.05418 14.1095 6.16964 13.9997 6.33552C13.8899 6.50139 13.8505 6.7041 13.8901 6.89903C13.9628 7.25436 13.9994 7.62136 14.0001 8.00003C14.0001 9.45872 13.4207 10.8577 12.3892 11.8891C11.3578 12.9206 9.9588 13.5 8.50011 13.5C7.04142 13.5 5.64248 12.9206 4.61103 11.8891C3.57958 10.8577 3.00011 9.45872 3.00011 8.00003ZM8.36411 5.50403C8.56276 5.49342 8.74906 5.40434 8.88202 5.25637C9.01498 5.1084 9.08372 4.91368 9.07311 4.71503C9.0625 4.51638 8.97342 4.33009 8.82545 4.19712C8.67749 4.06416 8.48276 3.99542 8.28411 4.00603C7.51604 4.04742 6.77619 4.30939 6.1532 4.76055C5.53022 5.21171 5.05053 5.83293 4.77161 6.54976C4.49269 7.2666 4.42637 8.04866 4.58059 8.80223C4.73481 9.5558 5.10303 10.2489 5.64114 10.7985C6.17925 11.3482 6.86442 11.731 7.61455 11.9011C8.36469 12.0713 9.14797 12.0215 9.87056 11.7579C10.5931 11.4942 11.2244 11.0278 11.6886 10.4145C12.1529 9.80119 12.4305 9.06706 12.4881 8.30003C12.5028 8.10165 12.4381 7.90554 12.3083 7.75486C12.1784 7.60417 11.994 7.51125 11.7956 7.49653C11.5972 7.48181 11.4011 7.5465 11.2504 7.67637C11.0998 7.80624 11.0068 7.99065 10.9921 8.18903C10.9556 8.66817 10.7818 9.12665 10.4916 9.50957C10.2013 9.8925 9.80675 10.1837 9.35526 10.3482C8.90377 10.5127 8.41444 10.5436 7.94584 10.4372C7.47724 10.3308 7.04922 10.0917 6.71304 9.74831C6.37685 9.40497 6.14674 8.97201 6.05025 8.50127C5.95376 8.03053 5.99498 7.54195 6.16897 7.09404C6.34296 6.64612 6.64236 6.25783 7.03132 5.97566C7.42027 5.6935 7.88231 5.5294 8.36211 5.50303" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_4852_6548">
                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <h3>На лобутены</h3>
        </div>
        <h3 className={styles.topContentTitle}>{investment && formatNumber(investment.investment_amount)} сум</h3>
        <div className={styles.topProfit}>
          <div className={styles.topProfitIcon}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.44205 12.4996L8.55751 3.50029M8.55751 3.50029L4.51294 6.94869M8.55751 3.50029L12.5123 7.05132" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <h3 className={styles.topProfitTitle}> Прибыль</h3>
          </div>
          <h3 className={styles.topProfitTitle}>
            + {investment && formatNumber(investment.last_month_profit.amount)} сум
          </h3>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.contentButtons}>
        <button className={styles.contentButtonsItem}>Пополнить</button>
        <button className={`${styles.contentButtonsItem} ${styles.other}`}>Редактировать</button>
      </div>
      <div className={styles.contentWrapper}>
        <div className={`${styles.contentWrapperBox} ${styles.contentWrapperHalf}`}>
          <h3 className={styles.contentWrapperTitle}>
            Прогресс
          </h3>
          <h4 className={styles.contentWrapperSubTitle}>24 мес из 36</h4>
          <div className={styles.contentWrapperProgress}>
            <span></span>
          </div>
        </div>
        <div className={`${styles.contentWrapperBox} ${styles.contentWrapperHalf}`}>
          <h3 className={styles.contentWrapperTitle}>
            Ваша карта
          </h3>
          <div className={styles.contentWrapperCard}>
            <div className={styles.contentWrapperCardTexts}>
              <h3>TBC</h3>
              <h4>** 3214</h4>
            </div>
            <div className={styles.contentWrapperCardIcon}>
              <img src="/card-inner.svg" alt="card inner" />
            </div>
          </div>
        </div>
        <div className={`${styles.contentWrapperBox} ${styles.contentWrapperAuto}`}>
          <div className={styles.contentWrapperAutoTexts}>
            <h3 className={styles.contentTitle}>Автосписание</h3>
            <p>Деньги списываются автоматически с вашей карты</p>
          </div>
          <div>
            <label
              className={`${styles.contentWrapperAutoCheckbox} ${isAutoActive ? styles.active : ''}`}
              htmlFor="auto"
            >
              <input
                type="checkbox"
                name="auto"
                id="auto"
                checked={isAutoActive}
                onChange={handleAutoCheckboxChange}
              />
            </label>
          </div>
        </div>
        <div className={`${styles.contentWrapperBox} ${styles.contentGraph}`}>
          <h3 className={styles.contentTitle}>
            Показатели портфеля
          </h3>
          <div className={styles.contentGraphContent}>
            <ApexChart options={option} series={series} type="line" height='100%' />
          </div>
          <div className={styles.contentGraphLine}></div>
          <div className={styles.contentGraphBottom}>
            <div className={styles.contentGraphBottomItems}>
              3М
            </div>
            <div className={styles.contentGraphBottomItems}>
              6М
            </div>
            <div className={styles.contentGraphBottomItems}>
              Г
            </div>
            <div className={`${styles.contentGraphBottomItems} ${styles.active}`}>
              Все
            </div>
          </div>
        </div>
        <div className={`${styles.contentWrapperBox} ${styles.contentWrapperAuto}`}>
          <div className={styles.contentWrapperAutoTexts}>
            <h3 className={styles.contentTitle}>Капитализация</h3>
            <p>Прибыль увеличивается, потому что находится в обороте</p>
          </div>
          <div>
            <label
              className={`${styles.contentWrapperAutoCheckbox} ${isCapActive ? styles.active : ''}`}
              htmlFor="cap"
            >
              <input
                type="checkbox"
                name="cap"
                id="cap"
                checked={isCapActive}
                onChange={handleCapCheckboxChange}
              />
            </label>
          </div>
        </div>
        <div className={`${styles.contentWrapperBox} ${styles.contentWrapperHistory}`}>
          <h3 className={styles.contentTitle}>История поступлений</h3>
          <ul className={styles.historyList}>
            <li className={styles.historyListItem}>
              <div className={styles.historyListItemLeft}>
                <div className={styles.historyListItemIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L6 14M6 14V9M6 14H11" stroke="#01CAB0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.historyListItemTexts}>
                  <h3>Со счёта •• 6289</h3>
                  <p>29 авг 2024</p>
                </div>
              </div>
              <h3 className={styles.historyListItemPrice}>+ 122 720 сум</h3>
            </li>
            <li className={styles.historyListItem}>
              <div className={styles.historyListItemLeft}>
                <div className={styles.historyListItemIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L6 14M6 14V9M6 14H11" stroke="#01CAB0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.historyListItemTexts}>
                  <h3>Со счёта •• 6289</h3>
                  <p>29 авг 2024</p>
                </div>
              </div>
              <h3 className={styles.historyListItemPrice}>+ 122 720 сум</h3>
            </li>
            <li className={styles.historyListItem}>
              <div className={styles.historyListItemLeft}>
                <div className={styles.historyListItemIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4850_7140)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.2931 2.00003C15.6831 2.00003 16.0001 2.31703 16.0001 2.70703V4.00003H17.2931C17.433 4 17.5697 4.04145 17.686 4.11913C17.8023 4.19682 17.8929 4.30725 17.9464 4.43645C18 4.56566 18.014 4.70784 17.9867 4.845C17.9594 4.98216 17.892 5.10815 17.7931 5.20703L16.3331 6.66703C16.1199 6.87973 15.8313 6.99945 15.5301 7.00003H14.0601L10.5301 10.53C10.3879 10.6625 10.1999 10.7346 10.0056 10.7312C9.81129 10.7278 9.6259 10.6491 9.48849 10.5117C9.35108 10.3742 9.27237 10.1889 9.26894 9.99455C9.26551 9.80025 9.33763 9.6122 9.47011 9.47003L13.0001 5.94003V4.47003C13.0001 4.16903 13.1201 3.88003 13.3331 3.66603L14.7931 2.20603C14.8585 2.14007 14.9365 2.0878 15.0223 2.05226C15.1081 2.01672 15.2002 1.99863 15.2931 1.99903M4.50011 10C4.50001 9.18457 4.68123 8.37928 5.03067 7.64248C5.38011 6.90568 5.88901 6.25581 6.52054 5.73991C7.15207 5.224 7.89041 4.85499 8.68211 4.65957C9.47382 4.46416 10.2991 4.44723 11.0981 4.61003C11.292 4.64703 11.4927 4.60608 11.6567 4.49606C11.8206 4.38604 11.9345 4.21582 11.9737 4.02233C12.013 3.82884 11.9743 3.62769 11.8662 3.46252C11.758 3.29735 11.5891 3.18147 11.3961 3.14003C9.92178 2.84028 8.3901 3.02352 7.02808 3.66258C5.66606 4.30165 4.54618 5.36253 3.83441 6.688C3.12263 8.01348 2.85685 9.53301 3.07644 11.0214C3.29603 12.5098 3.98931 13.8878 5.05354 14.9513C6.11777 16.0147 7.4963 16.707 8.98485 16.9255C10.4734 17.144 11.9927 16.8771 13.3177 16.1643C14.6426 15.4516 15.7027 14.3309 16.3408 12.9684C16.9788 11.606 17.1609 10.0741 16.8601 8.60003C16.8205 8.4051 16.705 8.2339 16.5391 8.12409C16.3732 8.01429 16.1705 7.97488 15.9756 8.01453C15.7807 8.05418 15.6095 8.16964 15.4997 8.33552C15.3899 8.50139 15.3505 8.7041 15.3901 8.89903C15.4628 9.25436 15.4994 9.62136 15.5001 10C15.5001 11.4587 14.9207 12.8577 13.8892 13.8891C12.8578 14.9206 11.4588 15.5 10.0001 15.5C8.54142 15.5 7.14248 14.9206 6.11103 13.8891C5.07958 12.8577 4.50011 11.4587 4.50011 10ZM9.86411 7.50403C10.0628 7.49342 10.2491 7.40434 10.382 7.25637C10.515 7.1084 10.5837 6.91368 10.5731 6.71503C10.5625 6.51638 10.4734 6.33009 10.3255 6.19712C10.1775 6.06416 9.98276 5.99542 9.78411 6.00603C9.01604 6.04742 8.27619 6.30939 7.6532 6.76055C7.03022 7.21171 6.55053 7.83293 6.27161 8.54976C5.99269 9.2666 5.92637 10.0487 6.08059 10.8022C6.23481 11.5558 6.60303 12.2489 7.14114 12.7985C7.67925 13.3482 8.36442 13.731 9.11455 13.9011C9.86469 14.0713 10.648 14.0215 11.3706 13.7579C12.0931 13.4942 12.7244 13.0278 13.1886 12.4145C13.6529 11.8012 13.9305 11.0671 13.9881 10.3C14.0028 10.1016 13.9381 9.90554 13.8083 9.75486C13.6784 9.60417 13.494 9.51125 13.2956 9.49653C13.0972 9.48181 12.9011 9.5465 12.7504 9.67637C12.5998 9.80624 12.5068 9.99065 12.4921 10.189C12.4556 10.6682 12.2818 11.1266 11.9916 11.5096C11.7013 11.8925 11.3067 12.1837 10.8553 12.3482C10.4038 12.5127 9.91444 12.5436 9.44584 12.4372C8.97724 12.3308 8.54922 12.0917 8.21304 11.7483C7.87685 11.405 7.64674 10.972 7.55025 10.5013C7.45376 10.0305 7.49498 9.54195 7.66897 9.09404C7.84296 8.64612 8.14236 8.25783 8.53132 7.97566C8.92027 7.6935 9.38231 7.5294 9.86211 7.50303" fill="#01CAB0" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4850_7140">
                        <rect width="16" height="16" fill="white" transform="translate(2 2)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.historyListItemTexts}>
                  <h3>Открыта цель</h3>
                  <p>29 авг 2024</p>
                </div>
              </div>
              <h3 className={styles.historyListItemPrice}>+ 122 720 сум</h3>
            </li>
          </ul>
          <div className={styles.contentGraphLine}></div>
          <button className={styles.historyButton}>Показать всю историю</button>
        </div>
        <div className={`${styles.contentWrapperBox} ${styles.contentWrapperHistory}`}>
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
      </div>
      <button className={styles.contentButton}>
        Хочу вывести средства
      </button>
    </div>
  </>
}

export default AimInner