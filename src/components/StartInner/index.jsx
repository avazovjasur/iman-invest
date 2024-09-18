import styles from './StartInner.module.scss'
import { useState, useRef } from 'react';
import Link from 'next/link';

const StartInner = () => {
  const questions = [
    { title: 'Познакомьтесь с IMAN', description: 'IMAN направляет средства, полученные от инвесторов, для финансирования продажи товаров и услуг в рассрочку. То есть такие товары, как бытовая техника, мебель, автозапчасти, электроника, спортивные товары и услуги, такие как медицинское обслуживание, лечение, хирургические операции и курсы обучения, закупаются у партнеров IMAN' },
    { title: 'Инвестируйте легко', description: 'IMAN направляет средства, полученные от инвесторов, для финансирования продажи товаров и услуг в рассрочку. То есть такие товары, как бытовая техника, мебель, автозапчасти, электроника, спортивные товары и услуги, такие как медицинское обслуживание, лечение, хирургические операции и курсы обучения, закупаются у партнеров IMAN' },
    { title: 'Получайте надежную прибыль', description: 'IMAN направляет средства, полученные от инвесторов, для финансирования продажи товаров и услуг в рассрочку. То есть такие товары, как бытовая техника, мебель, автозапчасти, электроника, спортивные товары и услуги, такие как медицинское обслуживание, лечение, хирургические операции и курсы обучения, закупаются у партнеров IMAN' },
    { title: 'Выводите деньги с удобством', description: 'IMAN направляет средства, полученные от инвесторов, для финансирования продажи товаров и услуг в рассрочку. То есть такие товары, как бытовая техника, мебель, автозапчасти, электроника, спортивные товары и услуги, такие как медицинское обслуживание, лечение, хирургические операции и курсы обучения, закупаются у партнеров IMAN' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return <>
    <div className={styles.wrapper}>
      <h3 className={styles.startTitle}>
        С чего начать
      </h3>
      <ul className={styles.startTopList}>
        <li className={styles.startTopListItem}>
          <div className={`${styles.startTopListInner} ${styles.first}`}>
            <h3>Зарабатывать деньги</h3>
            <img className={styles.first} src="./start/item1.png" alt="item bg" />
          </div>
        </li>
        <li className={styles.startTopListItem}>
          <div className={`${styles.startTopListInner} ${styles.second}`}>
            <h3>Увеличение дохода</h3>
            <img className={styles.second} src="./start/item2.png" alt="item bg" />
          </div>
        </li>
        <li className={styles.startTopListItem}>
          <div className={`${styles.startTopListInner} ${styles.third}`}>
            <h3>Управление деньгами</h3>
            <img className={styles.third} src="./start/item3.png" alt="item bg" />
          </div>
        </li>
        <li className={styles.startTopListItem}>
          <div className={`${styles.startTopListInner} ${styles.fourth}`}>
            <h3>Как тратить деньги и управлять ими</h3>
          </div>
        </li>
      </ul>
      <div className={styles.startWrapper}>
        <div className={styles.startContent}>
          <div className={styles.value}>
            <div className={styles.valueTop}>
              <h3 className={styles.title}>О ценностях Iman</h3>
              <Link href="/values" className={styles.valueTopBtn}>
                <h3>Смотреть все</h3>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.2002 10.2852L7.7788 6.70655C8.16933 6.31603 8.16933 5.68286 7.7788 5.29234L4.2002 1.71373" stroke="#3680FF" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
            <ul className={styles.valueList}>
              <li className={styles.valueListItem}>
                <div className={styles.valueListItemBox}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6375 6.65288C1.2125 6.10088 1 5.82438 1 5.00488C1 4.18488 1.2125 3.90938 1.6375 3.35688C2.486 2.25488 3.909 1.00488 6 1.00488C8.091 1.00488 9.514 2.25488 10.3625 3.35688C10.7875 3.90988 11 4.18538 11 5.00488C11 5.82488 10.7875 6.10038 10.3625 6.65288C9.514 7.75488 8.091 9.00488 6 9.00488C3.909 9.00488 2.486 7.75488 1.6375 6.65288Z" stroke="white" />
                    <path d="M7.5 5.00488C7.5 5.40271 7.34196 5.78424 7.06066 6.06554C6.77936 6.34685 6.39782 6.50488 6 6.50488C5.60218 6.50488 5.22064 6.34685 4.93934 6.06554C4.65804 5.78424 4.5 5.40271 4.5 5.00488C4.5 4.60706 4.65804 4.22553 4.93934 3.94422C5.22064 3.66292 5.60218 3.50488 6 3.50488C6.39782 3.50488 6.77936 3.66292 7.06066 3.94422C7.34196 4.22553 7.5 4.60706 7.5 5.00488Z" stroke="white" />
                  </svg>
                  <h3>12,3K</h3>
                </div>
              </li>
              <li className={styles.valueListItem}>
                <div className={styles.valueListItemBox}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6375 6.65288C1.2125 6.10088 1 5.82438 1 5.00488C1 4.18488 1.2125 3.90938 1.6375 3.35688C2.486 2.25488 3.909 1.00488 6 1.00488C8.091 1.00488 9.514 2.25488 10.3625 3.35688C10.7875 3.90988 11 4.18538 11 5.00488C11 5.82488 10.7875 6.10038 10.3625 6.65288C9.514 7.75488 8.091 9.00488 6 9.00488C3.909 9.00488 2.486 7.75488 1.6375 6.65288Z" stroke="white" />
                    <path d="M7.5 5.00488C7.5 5.40271 7.34196 5.78424 7.06066 6.06554C6.77936 6.34685 6.39782 6.50488 6 6.50488C5.60218 6.50488 5.22064 6.34685 4.93934 6.06554C4.65804 5.78424 4.5 5.40271 4.5 5.00488C4.5 4.60706 4.65804 4.22553 4.93934 3.94422C5.22064 3.66292 5.60218 3.50488 6 3.50488C6.39782 3.50488 6.77936 3.66292 7.06066 3.94422C7.34196 4.22553 7.5 4.60706 7.5 5.00488Z" stroke="white" />
                  </svg>
                  <h3>12,3K</h3>
                </div>
              </li>
              <li className={styles.valueListItem}>
                <div className={styles.valueListItemBox}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6375 6.65288C1.2125 6.10088 1 5.82438 1 5.00488C1 4.18488 1.2125 3.90938 1.6375 3.35688C2.486 2.25488 3.909 1.00488 6 1.00488C8.091 1.00488 9.514 2.25488 10.3625 3.35688C10.7875 3.90988 11 4.18538 11 5.00488C11 5.82488 10.7875 6.10038 10.3625 6.65288C9.514 7.75488 8.091 9.00488 6 9.00488C3.909 9.00488 2.486 7.75488 1.6375 6.65288Z" stroke="white" />
                    <path d="M7.5 5.00488C7.5 5.40271 7.34196 5.78424 7.06066 6.06554C6.77936 6.34685 6.39782 6.50488 6 6.50488C5.60218 6.50488 5.22064 6.34685 4.93934 6.06554C4.65804 5.78424 4.5 5.40271 4.5 5.00488C4.5 4.60706 4.65804 4.22553 4.93934 3.94422C5.22064 3.66292 5.60218 3.50488 6 3.50488C6.39782 3.50488 6.77936 3.66292 7.06066 3.94422C7.34196 4.22553 7.5 4.60706 7.5 5.00488Z" stroke="white" />
                  </svg>
                  <h3>12,3K</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.value}>
            <div className={styles.valueTop}>
              <h3 className={styles.title}>Полезно для начинающих</h3>
              <Link href="/useful" className={styles.valueTopBtn}>
                <h3>Смотреть все</h3>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.2002 10.2852L7.7788 6.70655C8.16933 6.31603 8.16933 5.68286 7.7788 5.29234L4.2002 1.71373" stroke="#3680FF" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
            <ul className={styles.mainList}>
              <li className={styles.mainListItem}>
                <div className={styles.mainListItemImg}>
                  <div className={styles.mainListItemBox}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 6.00488C11 8.76488 8.76 11.0049 6 11.0049C3.24 11.0049 1 8.76488 1 6.00488C1 3.24488 3.24 1.00488 6 1.00488C8.76 1.00488 11 3.24488 11 6.00488Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.85543 7.59477L6.30543 6.66977C6.03543 6.50977 5.81543 6.12477 5.81543 5.80977V3.75977" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>3 мин</h3>
                  </div>
                </div>
                <h3 className={styles.mainListItemTitle}>
                  Основные принципы и правила инвестирования
                </h3>
              </li>
              <li className={styles.mainListItem}>
                <div className={styles.mainListItemImg}>
                  <div className={styles.mainListItemBox}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 6.00488C11 8.76488 8.76 11.0049 6 11.0049C3.24 11.0049 1 8.76488 1 6.00488C1 3.24488 3.24 1.00488 6 1.00488C8.76 1.00488 11 3.24488 11 6.00488Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.85543 7.59477L6.30543 6.66977C6.03543 6.50977 5.81543 6.12477 5.81543 5.80977V3.75977" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>3 мин</h3>
                  </div>
                </div>
                <h3 className={styles.mainListItemTitle}>
                  5 распространенных ошибок
                </h3>
              </li>
              <li className={styles.mainListItem}>
                <div className={styles.mainListItemImg}>
                  <div className={styles.mainListItemBox}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 6.00488C11 8.76488 8.76 11.0049 6 11.0049C3.24 11.0049 1 8.76488 1 6.00488C1 3.24488 3.24 1.00488 6 1.00488C8.76 1.00488 11 3.24488 11 6.00488Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.85543 7.59477L6.30543 6.66977C6.03543 6.50977 5.81543 6.12477 5.81543 5.80977V3.75977" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>3 мин</h3>
                  </div>
                </div>
                <h3 className={styles.mainListItemTitle}>
                  5 распространенных ошибок
                </h3>
              </li>
            </ul>
          </div>
          <div className={styles.value}>
            <div className={styles.valueTop}>
              <h3 className={styles.title}>Топ инвесторов</h3>
            </div>
            <div className={styles.startBody}>
              <ul className={styles.topList}>
                <li className={`${styles.topListItem} ${styles.first}`}>
                  <div className={styles.topListItemLeft}>
                    <div className={`${styles.topListItemIcon} ${styles.first}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.68437 15.3447C9.72344 15.35 9.76262 15.3543 9.80188 15.3577L11.3578 18.0688C11.7779 18.8009 12.8288 18.8156 13.2693 18.0956L13.8004 17.2272L15.1636 17.2272C16.0211 17.2272 16.5554 16.297 16.1233 15.5563L14.8267 13.3334C15.3218 12.8044 15.572 12.0443 15.386 11.2444C15.3249 10.9815 15.4378 10.7089 15.6669 10.5662C17.1109 9.66713 17.1109 7.56516 15.6669 6.66604C15.4378 6.5234 15.3249 6.25078 15.386 5.98793C15.7713 4.33112 14.285 2.8448 12.6281 3.23007C12.3653 3.29119 12.0927 3.17827 11.95 2.94919C11.0509 1.50522 8.94895 1.50522 8.04983 2.94919C7.90719 3.17827 7.63457 3.29119 7.37172 3.23007C5.71491 2.8448 4.22859 4.33112 4.61386 5.98793C4.67498 6.25078 4.56206 6.5234 4.33297 6.66604C2.88901 7.56516 2.88901 9.66713 4.33297 10.5662C4.56206 10.7089 4.67498 10.9815 4.61386 11.2444C4.46482 11.8853 4.59586 12.5007 4.90852 12.9921L3.41279 15.5563C2.98071 16.297 3.515 17.2272 4.37254 17.2272L5.66513 17.2272L6.2762 18.1438C6.73764 18.8359 7.76801 18.7942 8.17197 18.067L9.68437 15.3447ZM8.2287 14.533C8.16491 14.4552 8.1051 14.3719 8.04983 14.2831C7.90719 14.054 7.63457 13.9411 7.37172 14.0022C6.98378 14.0924 6.60518 14.08 6.25777 13.9869L5.33978 15.5606L5.96246 15.5606C6.33395 15.5606 6.68086 15.7462 6.88693 16.0553L7.15751 16.4612L8.2287 14.533ZM13.3198 14.0579L14.1963 15.5606L13.489 15.5606C13.1021 15.5606 12.7431 15.7618 12.5412 16.0919L12.3367 16.4262L11.4394 14.8626C11.6336 14.7059 11.807 14.5128 11.95 14.2831C12.0927 14.054 12.3653 13.9411 12.6281 14.0022C12.8638 14.057 13.096 14.0739 13.3198 14.0579ZM9.46464 13.4021C9.71144 13.7985 10.2884 13.7985 10.5352 13.4021C11.0549 12.5676 12.048 12.1562 13.0056 12.3789C13.4604 12.4846 13.8684 12.0766 13.7626 11.6218C13.54 10.6642 13.9513 9.6711 14.7859 9.15144C15.1823 8.90463 15.1823 8.32765 14.7859 8.08085C13.9513 7.56118 13.54 6.56804 13.7626 5.61044C13.8684 5.15566 13.4604 4.74767 13.0056 4.85343C12.048 5.0761 11.0549 4.66473 10.5352 3.83015C10.2884 3.43379 9.71144 3.43379 9.46464 3.83015C8.94497 4.66473 7.95183 5.0761 6.99423 4.85343C6.53945 4.74767 6.13146 5.15566 6.23721 5.61044C6.45989 6.56804 6.04851 7.56118 5.21394 8.08085C4.81758 8.32765 4.81758 8.90463 5.21394 9.15144C6.04851 9.6711 6.45989 10.6642 6.23721 11.6218C6.13146 12.0766 6.53945 12.4846 6.99423 12.3789C7.95183 12.1562 8.94497 12.5676 9.46464 13.4021Z" fill="#FFBB38" />
                      </svg>
                    </div>
                    <div className={styles.topListItemTexts}>
                      <h3>Амир И.</h3>
                      <h4>Уже 2 года с нами</h4>
                    </div>
                  </div>
                  <div className={styles.topListItemRight}>
                    <div className={styles.topListItemTexts}>
                      <h3>12</h3>
                      <h4>Целей</h4>
                    </div>
                    <div className={styles.topListItemTexts}>
                      <h3 className={styles.right}>&gt;500 млн</h3>
                      <h4 className={styles.right}>сумов дохода</h4>
                    </div>
                  </div>
                </li>
                <li className={styles.line}></li>
                <li className={`${styles.topListItem} ${styles.first}`}>
                  <div className={styles.topListItemLeft}>
                    <div className={`${styles.topListItemIcon} ${styles.second}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.68437 15.3447C9.72344 15.35 9.76262 15.3543 9.80188 15.3577L11.3578 18.0688C11.7779 18.8009 12.8288 18.8156 13.2693 18.0956L13.8004 17.2272L15.1636 17.2272C16.0211 17.2272 16.5554 16.297 16.1233 15.5563L14.8267 13.3334C15.3218 12.8044 15.572 12.0443 15.386 11.2444C15.3249 10.9815 15.4378 10.7089 15.6669 10.5662C17.1109 9.66713 17.1109 7.56516 15.6669 6.66604C15.4378 6.5234 15.3249 6.25078 15.386 5.98793C15.7713 4.33112 14.285 2.8448 12.6281 3.23007C12.3653 3.29119 12.0927 3.17827 11.95 2.94919C11.0509 1.50522 8.94895 1.50522 8.04983 2.94919C7.90719 3.17827 7.63457 3.29119 7.37172 3.23007C5.71491 2.8448 4.22859 4.33112 4.61386 5.98793C4.67498 6.25078 4.56206 6.5234 4.33297 6.66604C2.88901 7.56516 2.88901 9.66713 4.33297 10.5662C4.56206 10.7089 4.67498 10.9815 4.61386 11.2444C4.46482 11.8853 4.59586 12.5007 4.90852 12.9921L3.41279 15.5563C2.98071 16.297 3.515 17.2272 4.37254 17.2272L5.66513 17.2272L6.2762 18.1438C6.73764 18.8359 7.76801 18.7942 8.17197 18.067L9.68437 15.3447ZM8.2287 14.533C8.16491 14.4552 8.1051 14.3719 8.04983 14.2831C7.90719 14.054 7.63457 13.9411 7.37172 14.0022C6.98378 14.0924 6.60518 14.08 6.25777 13.9869L5.33978 15.5606L5.96246 15.5606C6.33395 15.5606 6.68086 15.7462 6.88693 16.0553L7.15751 16.4612L8.2287 14.533ZM13.3198 14.0579L14.1963 15.5606L13.489 15.5606C13.1021 15.5606 12.7431 15.7618 12.5412 16.0919L12.3367 16.4262L11.4394 14.8626C11.6336 14.7059 11.807 14.5128 11.95 14.2831C12.0927 14.054 12.3653 13.9411 12.6281 14.0022C12.8638 14.057 13.096 14.0739 13.3198 14.0579ZM9.46464 13.4021C9.71144 13.7985 10.2884 13.7985 10.5352 13.4021C11.0549 12.5676 12.048 12.1562 13.0056 12.3789C13.4604 12.4846 13.8684 12.0766 13.7626 11.6218C13.54 10.6642 13.9513 9.6711 14.7859 9.15144C15.1823 8.90463 15.1823 8.32765 14.7859 8.08085C13.9513 7.56118 13.54 6.56804 13.7626 5.61044C13.8684 5.15566 13.4604 4.74767 13.0056 4.85343C12.048 5.0761 11.0549 4.66473 10.5352 3.83015C10.2884 3.43379 9.71144 3.43379 9.46464 3.83015C8.94497 4.66473 7.95183 5.0761 6.99423 4.85343C6.53945 4.74767 6.13146 5.15566 6.23721 5.61044C6.45989 6.56804 6.04851 7.56118 5.21394 8.08085C4.81758 8.32765 4.81758 8.90463 5.21394 9.15144C6.04851 9.6711 6.45989 10.6642 6.23721 11.6218C6.13146 12.0766 6.53945 12.4846 6.99423 12.3789C7.95183 12.1562 8.94497 12.5676 9.46464 13.4021Z" fill="#828DA1" />
                      </svg>
                    </div>
                    <div className={styles.topListItemTexts}>
                      <h3>Нурмухаммад А.</h3>
                      <h4>Уже 2 года с нами</h4>
                    </div>
                  </div>
                  <div className={styles.topListItemRight}>
                    <div className={styles.topListItemTexts}>
                      <h3>12</h3>
                      <h4>Целей</h4>
                    </div>
                    <div className={styles.topListItemTexts}>
                      <h3 className={styles.right}>&gt;50 млн</h3>
                      <h4 className={styles.right}>сумов дохода</h4>
                    </div>
                  </div>
                </li>
                <li className={styles.line}></li>
                <li className={`${styles.topListItem} ${styles.first}`}>
                  <div className={styles.topListItemLeft}>
                    <div className={`${styles.topListItemIcon} ${styles.third}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.68437 15.3447C9.72344 15.35 9.76262 15.3543 9.80188 15.3577L11.3578 18.0688C11.7779 18.8009 12.8288 18.8156 13.2693 18.0956L13.8004 17.2272L15.1636 17.2272C16.0211 17.2272 16.5554 16.297 16.1233 15.5563L14.8267 13.3334C15.3218 12.8044 15.572 12.0443 15.386 11.2444C15.3249 10.9815 15.4378 10.7089 15.6669 10.5662C17.1109 9.66713 17.1109 7.56516 15.6669 6.66604C15.4378 6.5234 15.3249 6.25078 15.386 5.98793C15.7713 4.33112 14.285 2.8448 12.6281 3.23007C12.3653 3.29119 12.0927 3.17827 11.95 2.94919C11.0509 1.50522 8.94895 1.50522 8.04983 2.94919C7.90719 3.17827 7.63457 3.29119 7.37172 3.23007C5.71491 2.8448 4.22859 4.33112 4.61386 5.98793C4.67498 6.25078 4.56206 6.5234 4.33297 6.66604C2.88901 7.56516 2.88901 9.66713 4.33297 10.5662C4.56206 10.7089 4.67498 10.9815 4.61386 11.2444C4.46482 11.8853 4.59586 12.5007 4.90852 12.9921L3.41279 15.5563C2.98071 16.297 3.515 17.2272 4.37254 17.2272L5.66513 17.2272L6.2762 18.1438C6.73764 18.8359 7.76801 18.7942 8.17197 18.067L9.68437 15.3447ZM8.2287 14.533C8.16491 14.4552 8.1051 14.3719 8.04983 14.2831C7.90719 14.054 7.63457 13.9411 7.37172 14.0022C6.98378 14.0924 6.60518 14.08 6.25777 13.9869L5.33978 15.5606L5.96246 15.5606C6.33395 15.5606 6.68086 15.7462 6.88693 16.0553L7.15751 16.4612L8.2287 14.533ZM13.3198 14.0579L14.1963 15.5606L13.489 15.5606C13.1021 15.5606 12.7431 15.7618 12.5412 16.0919L12.3367 16.4262L11.4394 14.8626C11.6336 14.7059 11.807 14.5128 11.95 14.2831C12.0927 14.054 12.3653 13.9411 12.6281 14.0022C12.8638 14.057 13.096 14.0739 13.3198 14.0579ZM9.46464 13.4021C9.71144 13.7985 10.2884 13.7985 10.5352 13.4021C11.0549 12.5676 12.048 12.1562 13.0056 12.3789C13.4604 12.4846 13.8684 12.0766 13.7626 11.6218C13.54 10.6642 13.9513 9.6711 14.7859 9.15144C15.1823 8.90463 15.1823 8.32765 14.7859 8.08085C13.9513 7.56118 13.54 6.56804 13.7626 5.61044C13.8684 5.15566 13.4604 4.74767 13.0056 4.85343C12.048 5.0761 11.0549 4.66473 10.5352 3.83015C10.2884 3.43379 9.71144 3.43379 9.46464 3.83015C8.94497 4.66473 7.95183 5.0761 6.99423 4.85343C6.53945 4.74767 6.13146 5.15566 6.23721 5.61044C6.45989 6.56804 6.04851 7.56118 5.21394 8.08085C4.81758 8.32765 4.81758 8.90463 5.21394 9.15144C6.04851 9.6711 6.45989 10.6642 6.23721 11.6218C6.13146 12.0766 6.53945 12.4846 6.99423 12.3789C7.95183 12.1562 8.94497 12.5676 9.46464 13.4021Z" fill="#995533" />
                      </svg>
                    </div>
                    <div className={styles.topListItemTexts}>
                      <h3>Абдужаббор А.</h3>
                      <h4>Уже 2 года с нами</h4>
                    </div>
                  </div>
                  <div className={styles.topListItemRight}>
                    <div className={styles.topListItemTexts}>
                      <h3>12</h3>
                      <h4>Целей</h4>
                    </div>
                    <div className={styles.topListItemTexts}>
                      <h3 className={styles.right}>&gt;5 млн</h3>
                      <h4 className={styles.right}>Доход</h4>
                    </div>
                  </div>
                </li>
                <li className={styles.line}></li>
              </ul>
              <div className={styles.topButtonBox}>
                <button className={styles.topButton} onClick={toggleContent}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4977_9763)">
                      <path d="M7.00001 13.3353C5.56403 12.6542 4.4026 11.5046 3.7067 10.0757C3.0108 8.64687 2.82186 7.02371 3.17096 5.47319C3.52005 3.92268 4.3864 2.53711 5.62753 1.54435C6.86866 0.551592 8.41068 0.0107422 10 0.0107422C11.5893 0.0107422 13.1314 0.551592 14.3725 1.54435C15.6136 2.53711 16.48 3.92268 16.8291 5.47319C17.1782 7.02371 16.9892 8.64687 16.2933 10.0757C15.5974 11.5046 14.436 12.6542 13 13.3353V16.0053H7.00001V13.3353ZM7.00001 17.0053H13V18.5053C13 19.3353 12.33 20.0053 11.5 20.0053H8.50001C8.10218 20.0053 7.72065 19.8473 7.43935 19.566C7.15804 19.2847 7.00001 18.9031 7.00001 18.5053V17.0053ZM9.00001 11.9053V14.0053H11V11.9053C12.2141 11.6575 13.2928 10.9677 14.0272 9.96971C14.7616 8.97171 15.0992 7.73658 14.9747 6.50377C14.8502 5.27097 14.2723 4.12832 13.3532 3.29736C12.434 2.4664 11.2391 2.00632 10 2.00632C8.76093 2.00632 7.56599 2.4664 6.64685 3.29736C5.72772 4.12832 5.14986 5.27097 5.02533 6.50377C4.90079 7.73658 5.23844 8.97171 5.97281 9.96971C6.70718 10.9677 7.78596 11.6575 9.00001 11.9053Z" fill="#828DA1" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4977_9763">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.00488281)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>Как попасть в топ?</h3>
                </button>
                {isOpen && (
                  <div className={styles.topButtonContent}>
                    <div className={styles.topButtonContentInner}>
                      <div className={styles.topButtonContentIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_4987_8864)">
                            <path d="M7.00001 13.3304C5.56403 12.6493 4.4026 11.4997 3.7067 10.0709C3.0108 8.64199 2.82186 7.01883 3.17096 5.46831C3.52005 3.91779 4.3864 2.53223 5.62753 1.53947C6.86866 0.54671 8.41068 0.00585938 10 0.00585938C11.5893 0.00585938 13.1314 0.54671 14.3725 1.53947C15.6136 2.53223 16.48 3.91779 16.8291 5.46831C17.1782 7.01883 16.9892 8.64199 16.2933 10.0709C15.5974 11.4997 14.436 12.6493 13 13.3304V16.0004H7.00001V13.3304ZM7.00001 17.0004H13V18.5004C13 19.3304 12.33 20.0004 11.5 20.0004H8.50001C8.10218 20.0004 7.72065 19.8424 7.43935 19.5611C7.15804 19.2798 7.00001 18.8982 7.00001 18.5004V17.0004ZM9.00001 11.9004V14.0004H11V11.9004C12.2141 11.6526 13.2928 10.9628 14.0272 9.96483C14.7616 8.96682 15.0992 7.73169 14.9747 6.49889C14.8502 5.26609 14.2723 4.12344 13.3532 3.29248C12.434 2.46151 11.2391 2.00144 10 2.00144C8.76093 2.00144 7.56599 2.46151 6.64685 3.29248C5.72772 4.12344 5.14986 5.26609 5.02533 6.49889C4.90079 7.73169 5.23844 8.96682 5.97281 9.96483C6.70718 10.9628 7.78596 11.6526 9.00001 11.9004Z" fill="#3680FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_4987_8864">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className={styles.topButtonContentTexts}>
                        <h3>Увеличивайте свой доход вместе с Iman Invest</h3>
                        <p>Чем больше целей вы достигнете, тем быстрее попадете в топ!</p>
                      </div>
                      <div className={
                        styles.topButtonContentExit
                      } onClick={toggleContent}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.40039 9.60039L9.60039 2.40039" stroke="#03034B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.60039 9.60039L2.40039 2.40039" stroke="#03034B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
          <div className={styles.value}>
            <div className={styles.valueTop}>
              <h3 className={styles.title}>Тесты</h3>
              <button className={styles.valueTopBtn}>
                <h3>Смотреть все</h3>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.2002 10.2852L7.7788 6.70655C8.16933 6.31603 8.16933 5.68286 7.7788 5.29234L4.2002 1.71373" stroke="#3680FF" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className={styles.mainList}>
              <li className={styles.mainListItem}>
                <div className={styles.mainListItemImg}>
                  <div className={`${styles.mainListItemBox} ${styles.second}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.99696 2.78104C7.39944 1.93757 8.60006 1.93757 9.00254 2.78104L10.2377 5.36949L13.0811 5.74431C14.0077 5.86645 14.3787 7.00831 13.7009 7.65174L11.6208 9.62631L12.143 12.4464C12.3132 13.3654 11.3419 14.0711 10.5205 13.6253L7.99975 12.2572L5.47904 13.6253C4.65764 14.0711 3.68632 13.3654 3.85648 12.4464L4.37868 9.62632L2.2986 7.65174C1.62078 7.00831 1.9918 5.86645 2.91836 5.74431L5.76181 5.36949L6.99696 2.78104ZM7.99975 3.77555L6.91322 6.05256C6.75124 6.39201 6.42853 6.62648 6.05563 6.67563L3.55432 7.00535L5.38412 8.74234C5.6569 9.00128 5.78017 9.38066 5.71169 9.75049L5.25232 12.2313L7.46973 11.0278C7.8003 10.8484 8.1992 10.8484 8.52977 11.0278L10.7472 12.2313L10.2878 9.75049C10.2193 9.38066 10.3426 9.00129 10.6154 8.74234L12.4452 7.00535L9.94387 6.67563C9.57097 6.62648 9.24826 6.39201 9.08628 6.05256L7.99975 3.77555Z" fill="#FFBB38" />
                    </svg>
                    <h3>10 очков</h3>
                  </div>
                </div>
                <h3 className={styles.mainListItemTitle}>
                  5 распространенных ошибок
                </h3>
                <h4 className={styles.mainListItemSubtitle}>
                  5 вопросов
                </h4>
              </li>
              <li className={styles.mainListItem}>
                <div className={styles.mainListItemImg}>
                  <div className={styles.mainListItemBox}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.99696 2.78104C7.39944 1.93757 8.60006 1.93757 9.00254 2.78104L10.2377 5.36949L13.0811 5.74431C14.0077 5.86645 14.3787 7.00831 13.7009 7.65174L11.6208 9.62631L12.143 12.4464C12.3132 13.3654 11.3419 14.0711 10.5205 13.6253L7.99975 12.2572L5.47904 13.6253C4.65764 14.0711 3.68632 13.3654 3.85648 12.4464L4.37868 9.62632L2.2986 7.65174C1.62078 7.00831 1.9918 5.86645 2.91836 5.74431L5.76181 5.36949L6.99696 2.78104ZM7.99975 3.77555L6.91322 6.05256C6.75124 6.39201 6.42853 6.62648 6.05563 6.67563L3.55432 7.00535L5.38412 8.74234C5.6569 9.00128 5.78017 9.38066 5.71169 9.75049L5.25232 12.2313L7.46973 11.0278C7.8003 10.8484 8.1992 10.8484 8.52977 11.0278L10.7472 12.2313L10.2878 9.75049C10.2193 9.38066 10.3426 9.00129 10.6154 8.74234L12.4452 7.00535L9.94387 6.67563C9.57097 6.62648 9.24826 6.39201 9.08628 6.05256L7.99975 3.77555Z" fill="#FFBB38" />
                    </svg>
                    <h3>10 очков</h3>
                  </div>
                </div>
                <h3 className={styles.mainListItemTitle}>
                  5 распространенных ошибок
                </h3>
                <h4 className={styles.mainListItemSubtitle}>
                  5 вопросов
                </h4>
              </li>
              <li className={styles.mainListItem}>
                <div className={styles.mainListItemImg}>
                  <div className={`${styles.mainListItemBox} ${styles.second}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.99696 2.78104C7.39944 1.93757 8.60006 1.93757 9.00254 2.78104L10.2377 5.36949L13.0811 5.74431C14.0077 5.86645 14.3787 7.00831 13.7009 7.65174L11.6208 9.62631L12.143 12.4464C12.3132 13.3654 11.3419 14.0711 10.5205 13.6253L7.99975 12.2572L5.47904 13.6253C4.65764 14.0711 3.68632 13.3654 3.85648 12.4464L4.37868 9.62632L2.2986 7.65174C1.62078 7.00831 1.9918 5.86645 2.91836 5.74431L5.76181 5.36949L6.99696 2.78104ZM7.99975 3.77555L6.91322 6.05256C6.75124 6.39201 6.42853 6.62648 6.05563 6.67563L3.55432 7.00535L5.38412 8.74234C5.6569 9.00128 5.78017 9.38066 5.71169 9.75049L5.25232 12.2313L7.46973 11.0278C7.8003 10.8484 8.1992 10.8484 8.52977 11.0278L10.7472 12.2313L10.2878 9.75049C10.2193 9.38066 10.3426 9.00129 10.6154 8.74234L12.4452 7.00535L9.94387 6.67563C9.57097 6.62648 9.24826 6.39201 9.08628 6.05256L7.99975 3.77555Z" fill="#FFBB38" />
                    </svg>
                    <h3>10 очков</h3>
                  </div>
                </div>
                <h3 className={styles.mainListItemTitle}>
                  5 распространенных ошибок
                </h3>
                <h4 className={styles.mainListItemSubtitle}>
                  5 вопросов
                </h4>
              </li>
            </ul>
          </div>
          <div className={styles.value}>
            <div className={styles.valueTop}>
              <h3 className={styles.title}>Больше об IMAN</h3>
            </div>
            <ul className={styles.moreList}>
              <li className={`${styles.moreListItem} ${styles.first}`}>
                <h3 className={styles.moreListItemTitle}>
                  Познакомьтесь <br />
                  с IMAN
                </h3>
              </li>
              <li className={`${styles.moreListItem} ${styles.second}`}>
                <h3 className={styles.moreListItemTitle}>
                  Получайте надежную прибыль
                </h3>
              </li>
              <li className={`${styles.moreListItem} ${styles.second}`}>
                <h3 className={styles.moreListItemTitle}>
                  Получайте надежную прибыль
                </h3>
              </li>
              <li className={`${styles.moreListItem} ${styles.second}`}>
                <h3 className={styles.moreListItemTitle}>
                  Получайте надежную прибыль
                </h3>
              </li>
            </ul>
          </div>
          <div className={styles.faq}>
            <div className={styles.faqContent}>
              <h3 className={styles.title}>FAQ</h3>
              <ul className={styles.faqList}>
                {questions.map((el, index) => (
                  <FaqItem
                    key={index}
                    title={el.title}
                    description={el.description}
                  />
                ))}
              </ul>
            </div>
          </div>
          <Link className={styles.startButton} href="/how-to-start">
            Не знаю с чего начать
          </Link>

          <a href='#' className={styles.social}>
            <div className={styles.socialLeft}>
              <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.1806 0.174275C27.261 0.198434 30.3061 0.832319 33.1403 2.03936C35.9745 3.2464 38.5416 5.0027 40.6936 7.20694C42.848 9.41196 44.5441 12.022 45.6839 14.8864C46.8237 17.7507 47.3846 20.8126 47.3342 23.8949C45.7522 54.6763 1.70356 54.4149 0.667557 23.5333C0.646016 20.4451 1.24082 17.3836 2.41715 14.5281C3.59348 11.6726 5.32768 9.08054 7.51822 6.90361C9.70751 4.72889 12.3091 3.0134 15.1704 1.85782C18.0317 0.702245 21.095 0.129865 24.1806 0.174275ZM28.4226 19.7183C28.4226 19.7183 28.4599 19.7416 28.1729 20.1056C27.8213 20.5303 27.44 20.9295 27.0319 21.3003L21.0959 27.0636C19.8266 28.3329 19.8522 29.1123 21.3292 30.1763C23.2216 31.5249 25.1396 32.7709 27.0856 34.0963C29.0292 35.4193 31.4139 37.3629 32.4009 34.5093C32.6513 33.7471 32.8411 32.9693 32.9702 32.1759C33.3856 29.8893 33.8009 27.6073 34.1626 25.2973C34.6549 22.0539 35.1216 18.8106 35.5369 15.5393C35.7446 13.9293 34.8882 13.2036 33.2806 13.5933C32.6175 13.7492 31.9676 13.9567 31.3369 14.2139L14.4062 21.3539C12.8009 22.0259 11.1932 22.7539 9.61122 23.5333C9.22156 23.7386 8.72922 24.3103 8.75489 24.6999C8.78056 25.0896 9.32656 25.5306 9.76756 25.7126C10.8549 26.1536 12.0216 26.4639 13.1626 26.8279C14.0303 27.1243 14.9579 27.2013 15.8626 27.0518C16.7673 26.9024 17.6209 26.5313 18.3472 25.9716C20.5009 24.4362 22.6877 22.948 24.9062 21.5079C25.9446 20.8079 26.6702 20.4183 27.6829 19.7159C28.2009 19.4593 28.3176 19.3379 28.4226 19.4943V19.7183Z" fill="white" />
              </svg>
            </div>
            <div className={styles.socialRight}>
              Следите за сообществом Iman Invest в телеграм!
            </div>
          </a>
        </div>
      </div>
    </div>
  </>
}


const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.faqListItem}>
      <div className={styles.faqListItemTop} onClick={toggleContent}>
        <h3>{title}</h3>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.71484 4.29004L5.29345 7.86865C5.68398 8.25917 6.31714 8.25917 6.70766 7.86865L10.2863 4.29004" stroke="#040415" strokeLinecap="round" />
        </svg>
      </div>
      <div ref={contentRef}
        className={styles.faqListItemContent}
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'height 0.3s ease'
        }}>
        <p>
          {description}
        </p>
      </div>
    </li>
  );
};


export default StartInner