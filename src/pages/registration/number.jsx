import { useRouter } from 'next/router'

import styles from '../../styles/modules/number.module.scss'

const number = () => {
    const router = useRouter()

    function nextPage() {
        router.push('/registration/code')
    }


    return <div className={styles.container}>
        <h1 className={styles.title}>Введите свой<br /> мобильный номер</h1>
        <p className={styles.subtitle}>Это необходимо для подтверждения<br /> вашего аккаунта</p>
        <div className={styles.numberInput}>
            <p>+998</p>
            <input type="text" placeholder='Номер телефона' />
        </div>
        <div className={styles.bottom}>
            <p className={styles.text}>Нажимая на кнопку Продолжить вы соглашаетесь 
с условиями <span>Публичной оферты, Политики конфиденциальности</span></p>
        <button onClick={nextPage} className={styles.next} type='button'>Продолжить</button>
        </div>
    </div>
}

export default number