import React, { useState } from 'react';
import styles from './OnBoarding.module.scss'

const OnBoarding = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSkip = () => {
    setStep(0);
  };

  return <>
    {step !== 0 && <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalClose}>
          <button className={`${styles.modalCloseBtn} ${step === 3 ? styles.active : ''}`} onClick={handleSkip}>Пропустить</button>
        </div>
        {step === 1 &&
          <div className={styles.modalStepOne}>
            <div className={styles.modalImage}>
              <img src="step1.png" alt="image" />
            </div>
            <div className={styles.stepOneContent}>
              <h2 className={styles.stepTitle}>
                Доходность до <span>~30%</span> годовых
              </h2>
              <p className={styles.stepText}>Достигать цели легко. Мы поможем</p>
            </div>
          </div>
        }
        {step === 2 &&
          <div className={styles.modalStepTwo}>
            <div className={styles.modalImage}>
              <img src="step2.png" alt="image" />
            </div>
            <div className={styles.stepTwoContent}>
              <h2 className={styles.stepTitle}>
                <div className={styles.line}> Ростовщичество.</div>
                <br />  Партнерство!
              </h2>
              <p className={styles.stepText}>Вы копите - мы заботимся о принципах</p>
            </div>
          </div>
        }
        {step === 3 &&
          <div className={styles.modalStepThree}>
            <div className={styles.modalImage}>
              <img src="step3.png" alt="image" />
            </div>
            <div className={styles.stepTwoContent}>
              <h2 className={styles.stepTitle}>
                Начните уже сейчас
              </h2>
              <p className={styles.stepText}>Чтобы начать копить, нужно только выбрать цель и срок</p>
            </div>
          </div>
        }
        <div className={styles.modalPagination}>
          <ul className={styles.modalPaginationList}>
            <li className={`${styles.modalPaginationItem} ${step === 1 ? styles.active : ''}`}></li>
            <li className={`${styles.modalPaginationItem} ${step === 2 ? styles.active : ''}`}></li>
            <li className={`${styles.modalPaginationItem} ${step === 3 ? styles.active : ''}`}></li>
          </ul>
        </div>
        <div className={styles.modalButton}>
          {step !== 3 && <button onClick={handleNextStep}>Далее</button>}
          {step === 3 && <button onClick={handleSkip}>Начать</button>}
        </div>
      </div>
    </div >}
  </>
}

export default OnBoarding