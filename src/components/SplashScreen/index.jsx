import styles from './SplashScreen.module.scss'

const SplashScreen = () => {
  return <div className={styles.container}>
    <img className={styles.logo} src="splash.svg" alt="" />
  </div>
}

export default SplashScreen