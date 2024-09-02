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
        <h4 className={styles.contentTitle}>
          Общий баланс
        </h4>
        <h3 className={styles.contentBalance}>
          0 сум
        </h3>
        <p className={styles.contentText}>Нет цели – нет прибыли :(</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomTexts}>
          <h3>Поставьте новую цель и инвестируйте 🚀</h3>
          <p>Получайте до 27% прибыли в год</p>
        </div>
        <div className={styles.bottomArrow}>
          <img src="arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
    <div className={styles.goal}>
      <div className={styles.goalContent}>
        <div className={styles.goalContentIcon}>
          <img src="mad.svg" alt="mad" />
        </div>
        <div className={styles.goalContentTexts}>
          <h3>У вас пока нет целей</h3>
          <p>Вы ничего не зарабатываете, <br />
            потому что не добавлены цели и не выбран тариф заработка</p>
        </div>
      </div>
    </div>
  </>
}

export default HomeInner