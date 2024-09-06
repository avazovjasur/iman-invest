import styles from './HomeInner.module.scss'

const HomeInner = () => {

  return <>
    <div className={styles.top}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderProfile}>
          <h3>E</h3>
          <span>
            <img src="settings.svg" alt="settings" />
          </span>
        </div>
        <button className={styles.topHeaderNotification}>
          <img src="notification.svg" alt="notification" />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M12.2499 8.5C12.2499 8.69778 12.1912 8.89112 12.0813 9.05557C11.9714 9.22002 11.8153 9.34819 11.6325 9.42388C11.4498 9.49957 11.2487 9.51937 11.0548 9.48079C10.8608 9.4422 10.6826 9.34696 10.5427 9.20711C10.4029 9.06725 10.3077 8.88907 10.2691 8.69509C10.2305 8.50111 10.2503 8.30004 10.326 8.11732C10.4017 7.93459 10.5298 7.77841 10.6943 7.66853C10.8587 7.55865 11.0521 7.5 11.2499 7.5C11.5151 7.5 11.7694 7.60536 11.957 7.79289C12.1445 7.98043 12.2499 8.23478 12.2499 8.5ZM14.7499 6.25V11.25C14.7499 11.7804 14.5391 12.2891 14.1641 12.6642C13.789 13.0393 13.2803 13.25 12.7499 13.25H3.74985C3.21942 13.25 2.71071 13.0393 2.33564 12.6642C1.96056 12.2891 1.74985 11.7804 1.74985 11.25V3.8075C1.74216 3.54006 1.78821 3.27379 1.88526 3.02446C1.98232 2.77514 2.12842 2.54782 2.31491 2.35597C2.5014 2.16412 2.72449 2.01164 2.97097 1.90755C3.21744 1.80346 3.4823 1.74989 3.74985 1.75H11.9999C12.1988 1.75 12.3895 1.82902 12.5302 1.96967C12.6708 2.11032 12.7499 2.30109 12.7499 2.5C12.7499 2.69891 12.6708 2.88968 12.5302 3.03033C12.3895 3.17098 12.1988 3.25 11.9999 3.25H3.74985C3.6828 3.24996 3.61643 3.26342 3.55468 3.28955C3.49293 3.31569 3.43707 3.35398 3.39043 3.40214C3.34378 3.45031 3.30729 3.50736 3.28314 3.56991C3.25899 3.63247 3.24767 3.69923 3.24985 3.76625V3.77125C3.26035 3.90364 3.32111 4.02699 3.41966 4.11601C3.51821 4.20503 3.64708 4.25297 3.77985 4.25H12.7499C13.2803 4.25 13.789 4.46071 14.1641 4.83579C14.5391 5.21086 14.7499 5.71957 14.7499 6.25ZM13.2499 6.25C13.2499 6.11739 13.1972 5.99021 13.1034 5.89645C13.0096 5.80268 12.8825 5.75 12.7499 5.75H3.77985C3.60103 5.75009 3.42294 5.72741 3.24985 5.6825V11.25C3.24985 11.3826 3.30253 11.5098 3.3963 11.6036C3.49007 11.6973 3.61724 11.75 3.74985 11.75H12.7499C12.8825 11.75 13.0096 11.6973 13.1034 11.6036C13.1972 11.5098 13.2499 11.3826 13.2499 11.25V6.25Z" fill="white" />
            </g>
          </svg>
          <h3>Общий баланс</h3>
        </div>
        <h3 className={styles.contentBalance}>
          672 902 209 сум
        </h3>
        <div className={styles.contentProfit}>
          <div className={styles.contentProfitIcon}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.44205 12.4996L8.55751 3.50029M8.55751 3.50029L4.51294 6.94869M8.55751 3.50029L12.5123 7.05132" stroke="white" stroke-width="1.8" stroke-linecap="round" />
            </svg>
            <h3 className={styles.contentProfitTitle}> Прибыль</h3>
          </div>
          <h3 className={styles.contentProfitTitle}>
            + 1 074 467 сум
          </h3>
          <div className={styles.contentProfitLine}></div>
          <h3 className={styles.contentProfitTitle}>
            + 7%
          </h3>

        </div>
        {/* <p className={styles.contentText}>Нет цели – нет прибыли :(</p> */}
      </div>
      {/* <div className={styles.bottom}>
        <div className={styles.bottomTexts}>
          <h3>Поставьте новую цель и инвестируйте 🚀</h3>
          <p>Получайте до 27% прибыли в год</p>
        </div>
        <div className={styles.bottomArrow}>
          <img src="arrow.svg" alt="arrow" />
        </div>
      </div> */}
    </div>
    <div className={styles.goal}>
      {/* <div className={styles.goalEmpty}>
        <div className={styles.goalEmptyIcon}>
          <img src="mad.svg" alt="mad" />
        </div>
        <div className={styles.goalEmptyTexts}>
          <h3>У вас пока нет целей</h3>
          <p>Вы ничего не зарабатываете, <br />
            потому что не добавлены цели и не выбран тариф заработка</p>
        </div>
      </div> */}
      <div className={styles.goalHeader}>
        <ul className={styles.headerList}>
          <li className={styles.headerListItem}>
            <div className={styles.headerListItemInner}>
              <img src="aim-bg.png" alt="aim" />
              <h3>
                Рекордные <br /> ставки <br /> по целям
              </h3>
            </div>
          </li>
          <li className={styles.headerListItem}>
            <div className={styles.headerListItemInner}>
              <img src="aim-bg.png" alt="aim" />
              <h3>
                Рекордные <br /> ставки <br /> по целям
              </h3>
            </div>
          </li>
          <li className={styles.headerListItem}>
            <div className={styles.headerListItemInner}>
              <img src="aim-bg.png" alt="aim" />
              <h3>
                Рекордные <br /> ставки <br /> по целям
              </h3>
            </div>
          </li>
          <li className={styles.headerListItem}>
            <div className={styles.headerListItemInner}>
              <img src="aim-bg.png" alt="aim" />
              <h3>
                Рекордные <br /> ставки <br /> по целям
              </h3>
            </div>
          </li>
          <li className={styles.headerListItem}>
            <div className={styles.headerListItemInner}>
              <img src="aim-bg.png" alt="aim" />
              <h3>
                Рекордные <br /> ставки <br /> по целям
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.goalContent}>
        <div className={styles.goalTop}>
          <h3 className={styles.goalTopTitle}>Ваши цели</h3>
          <button type='button' className={styles.goalTopButton}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0173 8.66634H8.68392V11.9997C8.68392 12.3663 8.38392 12.6663 8.01725 12.6663C7.65059 12.6663 7.35059 12.3663 7.35059 11.9997V8.66634H4.01725C3.65059 8.66634 3.35059 8.36634 3.35059 7.99967C3.35059 7.63301 3.65059 7.33301 4.01725 7.33301H7.35059V3.99967C7.35059 3.63301 7.65059 3.33301 8.01725 3.33301C8.38392 3.33301 8.68392 3.63301 8.68392 3.99967V7.33301H12.0173C12.3839 7.33301 12.6839 7.63301 12.6839 7.99967C12.6839 8.36634 12.3839 8.66634 12.0173 8.66634Z" fill="#367FFD" />
            </svg>
            Добавить
          </button>
        </div>
        <ul className={styles.goalList}>
          <li className={styles.goalListItem}>
            <div className={styles.goalListItemHeader}>
              <h3>
                На лабутены 👠
              </h3>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M1 0.5L6 5.5L1 10.5" stroke="#828DA1" stroke-linecap="round" />
              </svg>
            </div>
            <div className={styles.goalListItemStatistics}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <g clip-path="url(#clip0_4841_8272)">
                    <path d="M10.6665 11.1663C10.6665 10.4297 8.57717 9.83301 5.99984 9.83301M10.6665 11.1663C10.6665 11.903 8.57717 12.4997 5.99984 12.4997C3.4225 12.4997 1.33317 11.903 1.33317 11.1663M10.6665 11.1663V14.4577C10.6665 15.217 8.57717 15.833 5.99984 15.833C3.4225 15.833 1.33317 15.2177 1.33317 14.4577V11.1663M10.6665 11.1663C13.2158 11.1663 15.3332 10.5083 15.3332 9.83301V3.16634M5.99984 9.83301C3.4225 9.83301 1.33317 10.4297 1.33317 11.1663M5.99984 9.83301C3.0545 9.83301 0.666504 9.17501 0.666504 8.49967V5.16634M5.99984 3.83301C3.0545 3.83301 0.666504 4.42967 0.666504 5.16634M0.666504 5.16634C0.666504 5.90301 3.0545 6.49967 5.99984 6.49967C5.99984 7.17501 8.1685 7.83301 10.7178 7.83301C13.2672 7.83301 15.3332 7.17501 15.3332 6.49967M15.3332 3.16634C15.3332 2.42967 13.2665 1.83301 10.7178 1.83301C8.16917 1.83301 6.1025 2.42967 6.1025 3.16634M15.3332 3.16634C15.3332 3.90301 13.2665 4.49967 10.7178 4.49967C8.16917 4.49967 6.1025 3.90301 6.1025 3.16634M6.1025 3.16634V9.94367" stroke="#828DA1" stroke-width="1.2" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4841_8272">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>12 700 394</span>
              <span className={styles.goalListItemIncome}>+ 723 467 сум</span>
            </div>
            <div className={styles.goalListItemLine}></div>
            <div className={styles.goalItemBottom}>
              <div className={styles.goalItemFeatures}>
                <div className={styles.goalItemFeaturesBox}>
                  Ставка <span>27%</span>
                </div>
                <div className={styles.goalItemFeaturesBox}>
                  На 12 мес
                </div>
              </div>
              <div className={styles.goalItemExtra}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.75L5.5 8.25L13 0.75" stroke="#828DA1" stroke-linecap="round" />
                </svg>
                Автоплатеж
              </div>
            </div>
          </li>
          <li className={styles.goalListItem}>
            <div className={styles.goalListItemHeader}>
              <h3>
                На лабутены 👠
              </h3>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M1 0.5L6 5.5L1 10.5" stroke="#828DA1" stroke-linecap="round" />
              </svg>
            </div>
            <div className={styles.goalListItemStatistics}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <g clip-path="url(#clip0_4841_8272)">
                    <path d="M10.6665 11.1663C10.6665 10.4297 8.57717 9.83301 5.99984 9.83301M10.6665 11.1663C10.6665 11.903 8.57717 12.4997 5.99984 12.4997C3.4225 12.4997 1.33317 11.903 1.33317 11.1663M10.6665 11.1663V14.4577C10.6665 15.217 8.57717 15.833 5.99984 15.833C3.4225 15.833 1.33317 15.2177 1.33317 14.4577V11.1663M10.6665 11.1663C13.2158 11.1663 15.3332 10.5083 15.3332 9.83301V3.16634M5.99984 9.83301C3.4225 9.83301 1.33317 10.4297 1.33317 11.1663M5.99984 9.83301C3.0545 9.83301 0.666504 9.17501 0.666504 8.49967V5.16634M5.99984 3.83301C3.0545 3.83301 0.666504 4.42967 0.666504 5.16634M0.666504 5.16634C0.666504 5.90301 3.0545 6.49967 5.99984 6.49967C5.99984 7.17501 8.1685 7.83301 10.7178 7.83301C13.2672 7.83301 15.3332 7.17501 15.3332 6.49967M15.3332 3.16634C15.3332 2.42967 13.2665 1.83301 10.7178 1.83301C8.16917 1.83301 6.1025 2.42967 6.1025 3.16634M15.3332 3.16634C15.3332 3.90301 13.2665 4.49967 10.7178 4.49967C8.16917 4.49967 6.1025 3.90301 6.1025 3.16634M6.1025 3.16634V9.94367" stroke="#828DA1" stroke-width="1.2" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4841_8272">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>12 700 394</span>
              <span className={styles.goalListItemIncome}>+ 723 467 сум</span>
            </div>
            <div className={styles.goalListItemLine}></div>
            <div className={styles.goalItemBottom}>
              <div className={styles.goalItemFeatures}>
                <div className={styles.goalItemFeaturesBox}>
                  Ставка <span>27%</span>
                </div>
                <div className={styles.goalItemFeaturesBox}>
                  На 12 мес
                </div>
              </div>
              <div className={styles.goalItemExtra}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.75L5.5 8.25L13 0.75" stroke="#828DA1" stroke-linecap="round" />
                </svg>
                Автоплатеж
              </div>
            </div>
          </li>
          <li className={styles.goalListItem}>
            <div className={styles.goalListItemHeader}>
              <h3>
                На лабутены 👠
              </h3>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M1 0.5L6 5.5L1 10.5" stroke="#828DA1" stroke-linecap="round" />
              </svg>
            </div>
            <div className={styles.goalListItemStatistics}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <g clip-path="url(#clip0_4841_8272)">
                    <path d="M10.6665 11.1663C10.6665 10.4297 8.57717 9.83301 5.99984 9.83301M10.6665 11.1663C10.6665 11.903 8.57717 12.4997 5.99984 12.4997C3.4225 12.4997 1.33317 11.903 1.33317 11.1663M10.6665 11.1663V14.4577C10.6665 15.217 8.57717 15.833 5.99984 15.833C3.4225 15.833 1.33317 15.2177 1.33317 14.4577V11.1663M10.6665 11.1663C13.2158 11.1663 15.3332 10.5083 15.3332 9.83301V3.16634M5.99984 9.83301C3.4225 9.83301 1.33317 10.4297 1.33317 11.1663M5.99984 9.83301C3.0545 9.83301 0.666504 9.17501 0.666504 8.49967V5.16634M5.99984 3.83301C3.0545 3.83301 0.666504 4.42967 0.666504 5.16634M0.666504 5.16634C0.666504 5.90301 3.0545 6.49967 5.99984 6.49967C5.99984 7.17501 8.1685 7.83301 10.7178 7.83301C13.2672 7.83301 15.3332 7.17501 15.3332 6.49967M15.3332 3.16634C15.3332 2.42967 13.2665 1.83301 10.7178 1.83301C8.16917 1.83301 6.1025 2.42967 6.1025 3.16634M15.3332 3.16634C15.3332 3.90301 13.2665 4.49967 10.7178 4.49967C8.16917 4.49967 6.1025 3.90301 6.1025 3.16634M6.1025 3.16634V9.94367" stroke="#828DA1" stroke-width="1.2" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4841_8272">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>12 700 394</span>
              <span className={styles.goalListItemIncome}>+ 723 467 сум</span>
            </div>
            <div className={styles.goalListItemLine}></div>
            <div className={styles.goalItemBottom}>
              <div className={styles.goalItemFeatures}>
                <div className={styles.goalItemFeaturesBox}>
                  Ставка <span>27%</span>
                </div>
                <div className={styles.goalItemFeaturesBox}>
                  На 12 мес
                </div>
              </div>
              <div className={styles.goalItemExtra}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.75L5.5 8.25L13 0.75" stroke="#828DA1" stroke-linecap="round" />
                </svg>
                Автоплатеж
              </div>
            </div>
          </li>
          <li className={styles.goalListItem}>
            <div className={styles.goalListItemHeader}>
              <h3>
                На лабутены 👠
              </h3>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M1 0.5L6 5.5L1 10.5" stroke="#828DA1" stroke-linecap="round" />
              </svg>
            </div>
            <div className={styles.goalListItemStatistics}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <g clip-path="url(#clip0_4841_8272)">
                    <path d="M10.6665 11.1663C10.6665 10.4297 8.57717 9.83301 5.99984 9.83301M10.6665 11.1663C10.6665 11.903 8.57717 12.4997 5.99984 12.4997C3.4225 12.4997 1.33317 11.903 1.33317 11.1663M10.6665 11.1663V14.4577C10.6665 15.217 8.57717 15.833 5.99984 15.833C3.4225 15.833 1.33317 15.2177 1.33317 14.4577V11.1663M10.6665 11.1663C13.2158 11.1663 15.3332 10.5083 15.3332 9.83301V3.16634M5.99984 9.83301C3.4225 9.83301 1.33317 10.4297 1.33317 11.1663M5.99984 9.83301C3.0545 9.83301 0.666504 9.17501 0.666504 8.49967V5.16634M5.99984 3.83301C3.0545 3.83301 0.666504 4.42967 0.666504 5.16634M0.666504 5.16634C0.666504 5.90301 3.0545 6.49967 5.99984 6.49967C5.99984 7.17501 8.1685 7.83301 10.7178 7.83301C13.2672 7.83301 15.3332 7.17501 15.3332 6.49967M15.3332 3.16634C15.3332 2.42967 13.2665 1.83301 10.7178 1.83301C8.16917 1.83301 6.1025 2.42967 6.1025 3.16634M15.3332 3.16634C15.3332 3.90301 13.2665 4.49967 10.7178 4.49967C8.16917 4.49967 6.1025 3.90301 6.1025 3.16634M6.1025 3.16634V9.94367" stroke="#828DA1" stroke-width="1.2" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4841_8272">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>12 700 394</span>
              <span className={styles.goalListItemIncome}>+ 723 467 сум</span>
            </div>
            <div className={styles.goalListItemLine}></div>
            <div className={styles.goalItemBottom}>
              <div className={styles.goalItemFeatures}>
                <div className={styles.goalItemFeaturesBox}>
                  Ставка <span>27%</span>
                </div>
                <div className={styles.goalItemFeaturesBox}>
                  На 12 мес
                </div>
              </div>
              <div className={styles.goalItemExtra}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.75L5.5 8.25L13 0.75" stroke="#828DA1" stroke-linecap="round" />
                </svg>
                Автоплатеж
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </>
}

export default HomeInner