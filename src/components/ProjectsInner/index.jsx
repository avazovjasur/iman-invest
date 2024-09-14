import styles from './ProjectsInner.module.scss'
import Link from 'next/link';


const ProjectsInner = () => {

  return <>
    <div className={styles.content}>
      <h2 className={styles.contentTitle}>
        Инвестиции в проекты
      </h2>
      {/* <div className={styles.goalHeader}>
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
      </div> */}
      <div className={styles.contentWrapper}>
        <ul className={styles.contentList}>
          <Link href="/projects/1">
            <li className={styles.contentListItem}>
              <div className={styles.contentImg}>
                <img src="./project.png" alt="project" />
                <span>Скоро</span>
              </div>
              <div className={styles.contentBox}>
                <h3 className={styles.contentBoxTitle}>ЖК «Center-1»</h3>
                <h4 className={styles.contentBotSubtitle}>Инвестиция в постройку</h4>
                <div className={styles.contentBoxLine}></div>
                <ul className={styles.contentBoxList}>
                  <li className={styles.contentBoxListItem}>
                    От 12 млн
                  </li>
                  <li className={styles.contentBoxListItem}>
                    На 18 мес
                  </li>
                  <li className={`${styles.contentBoxListItem} ${styles.active}`}>
                    42% в год
                  </li>
                </ul>
              </div>
            </li>
          </Link>
          <Link href="/projects/1">
            <li className={styles.contentListItem}>
              <div className={styles.contentImg}>
                <img src="./project.png" alt="project" />
                <span>Скоро</span>
              </div>
              <div className={styles.contentBox}>
                <h3 className={styles.contentBoxTitle}>ЖК «Center-1»</h3>
                <h4 className={styles.contentBotSubtitle}>Инвестиция в постройку</h4>
                <div className={styles.contentBoxLine}></div>
                <ul className={styles.contentBoxList}>
                  <li className={styles.contentBoxListItem}>
                    От 12 млн
                  </li>
                  <li className={styles.contentBoxListItem}>
                    На 18 мес
                  </li>
                  <li className={`${styles.contentBoxListItem} ${styles.active}`}>
                    42% в год
                  </li>
                </ul>
              </div>
            </li>
          </Link>
          <Link href="/projects/1">
            <li className={styles.contentListItem}>
              <div className={styles.contentImg}>
                <img src="./project.png" alt="project" />
                <span>Скоро</span>
              </div>
              <div className={styles.contentBox}>
                <h3 className={styles.contentBoxTitle}>ЖК «Center-1»</h3>
                <h4 className={styles.contentBotSubtitle}>Инвестиция в постройку</h4>
                <div className={styles.contentBoxLine}></div>
                <ul className={styles.contentBoxList}>
                  <li className={styles.contentBoxListItem}>
                    От 12 млн
                  </li>
                  <li className={styles.contentBoxListItem}>
                    На 18 мес
                  </li>
                  <li className={`${styles.contentBoxListItem} ${styles.active}`}>
                    42% в год
                  </li>
                </ul>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  </>
}

export default ProjectsInner