import styles from '../styles/modules/start.module.scss'
import Link from 'next/link';

export default function HowToStart() {


  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <Link href="/home">
          <button className={styles.contentHeaderButton}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L1 7L7 13" stroke="#040415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Link>
        <h3 className={styles.contentHeaderTitle}>Полезное</h3>
      </div>
      <div className={styles.contentBody}>
        <div className={styles.contentBodyTop}>
          <div className={styles.contentBodyTopIcon}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99147 15.0205H6.22461V18.7557H9.99147V15.0205Z" fill="white" />
              <path d="M20.0416 3.66406H3.66309V21.3507H21.3461V3.66406H20.0416ZM10.3069 4.96026H12.1903V6.84623H10.3069V4.96026ZM7.48178 4.96026H8.73668V11.2425H13.7606V4.96026H17.5339V6.21757H15.0177V12.4976H7.48178V4.96026ZM11.2486 18.7453V20.0415H4.96982V4.96672H6.22472V13.7615H16.2725V7.47919H17.5339V15.0166H11.2486V18.7453ZM14.3891 20.0415H12.5057V18.1577H14.3891V20.0415ZM17.5296 20.0415H15.644V18.1577H17.5339L17.5296 20.0415ZM20.0416 20.0415H18.7845V4.96672H20.0416V20.0415Z" fill="white" />
              <path d="M10.6895 3.66393L12.506 1.84925L14.3203 3.66393H16.167L13.4282 0.924624L12.5002 0L11.5815 0.924624L8.84277 3.66393H10.6895Z" fill="white" />
              <path d="M3.66318 14.3233L1.84671 12.5087L3.66318 10.6918V8.84473L0.924434 11.584L0 12.5003L0.924434 13.4311L3.66318 16.1704V14.3233Z" fill="white" />
              <path d="M14.3203 21.3506L12.506 23.1674L10.6895 21.3506H8.84277L11.5815 24.0899L12.5002 25L13.4282 24.0899L16.167 21.3506H14.3203Z" fill="white" />
              <path d="M24.0854 11.5831L21.3467 8.84375V10.6908L23.1632 12.5077L21.3467 14.3224V16.1694L24.0854 13.4301L25.0005 12.4993L24.0854 11.5831Z" fill="white" />
            </svg>
          </div>
          <div className={styles.contentBodyTopTexts}>
            <h3>Iman Invest</h3>
            <h4>Советы</h4>
          </div>
        </div>
        <div className={styles.contentBodyImage}>
          <span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6.00488C11 8.76488 8.76 11.0049 6 11.0049C3.24 11.0049 1 8.76488 1 6.00488C1 3.24488 3.24 1.00488 6 1.00488C8.76 1.00488 11 3.24488 11 6.00488Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.85543 7.59477L6.30543 6.66977C6.03543 6.50977 5.81543 6.12477 5.81543 5.80977V3.75977" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>3 мин</h3>
          </span>
        </div>
        <div className={styles.contentArticle}>
          <h3 className={styles.contentArticleTitle}>5 распространенных ошибок </h3>
          <p className={styles.contentArticleText}>
            IMAN направляет средства, полученные от инвесторов, для финансирования продажи товаров и услуг в рассрочку. То есть такие товары, как бытовая техника, мебель, автозапчасти, электроника, спортивные товары и услуги, такие как медицинское обслуживание, лечение, хирургические операции и курсы обучения, закупаются у партнеров IMAN.
            <br /> <br />
            IMAN направляет средства, полученные от инвесторов, для финансирования продажи товаров и услуг в рассрочку. То есть такие товары, как бытовая техника, мебель, автозапчасти, электроника, спортивные товары и услуги, такие как медицинское обслуживание, лечение, хирургические операции и курсы обучения, закупаются у партнеров IMAN.
          </p>
        </div>
        <button className={styles.contentButton}>Не понял с чего начать</button>
      </div>
    </div>
  );
}