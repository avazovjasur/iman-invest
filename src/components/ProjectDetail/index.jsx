import styles from './ProjectDetail.module.scss'
import Link from 'next/link';

const ProjectDetail = () => {


  return <>
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <Link href="/home">
          <button className={styles.contentHeaderButton}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L1 7L7 13" stroke="#040415" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </Link>
        <h3 className={styles.contentHeaderTitle}>ЖК «Center-1»</h3>
      </div>
      <div className={styles.contentBody}>
        <div className={styles.dev}>
          <div className={styles.devBox}>
            <div className={styles.devBoxIcon}>луч</div>
            <div className={styles.devBoxTexts}>
              <h3>Группа Луч</h3>
              <p>Застройщик</p>
            </div>
          </div>
          <button className={styles.devButton}>Демо</button>
        </div>
        <button type='button' className={styles.demo}>
          <div className={styles.demoIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4922_7427)">
                <path d="M7.00001 13.3304C5.56403 12.6493 4.4026 11.4997 3.7067 10.0709C3.0108 8.64199 2.82186 7.01883 3.17096 5.46831C3.52005 3.91779 4.3864 2.53223 5.62753 1.53947C6.86866 0.54671 8.41068 0.00585938 10 0.00585938C11.5893 0.00585938 13.1314 0.54671 14.3725 1.53947C15.6136 2.53223 16.48 3.91779 16.8291 5.46831C17.1782 7.01883 16.9892 8.64199 16.2933 10.0709C15.5974 11.4997 14.436 12.6493 13 13.3304V16.0004H7.00001V13.3304ZM7.00001 17.0004H13V18.5004C13 19.3304 12.33 20.0004 11.5 20.0004H8.50001C8.10218 20.0004 7.72065 19.8424 7.43935 19.5611C7.15804 19.2798 7.00001 18.8982 7.00001 18.5004V17.0004ZM9.00001 11.9004V14.0004H11V11.9004C12.2141 11.6526 13.2928 10.9628 14.0272 9.96483C14.7616 8.96682 15.0992 7.73169 14.9747 6.49889C14.8502 5.26609 14.2723 4.12344 13.3532 3.29248C12.434 2.46151 11.2391 2.00144 10 2.00144C8.76093 2.00144 7.56599 2.46151 6.64685 3.29248C5.72772 4.12344 5.14986 5.26609 5.02533 6.49889C4.90079 7.73169 5.23844 8.96682 5.97281 9.96483C6.70718 10.9628 7.78596 11.6526 9.00001 11.9004Z" fill="#828DA1" />
              </g>
              <defs>
                <clipPath id="clip0_4922_7427">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.demoText}>Что такое демо?</div>
        </button>
        <div className={styles.item}>
          <div className={styles.itemImg}>
            <img src="/project.png" alt="project" />
            <span>Скоро</span>
          </div>
          <div className={styles.itemList}>
            <div className={styles.itemListItem}>
              <img src="/project.png" alt="project" />
            </div>
            <div className={styles.itemListItem}>
              <img src="/project.png" alt="project" />
            </div>
            <div className={styles.itemListItem}>
              <img src="/project.png" alt="project" />
            </div>
            <div className={styles.itemListItem}>
              <img src="/project.png" alt="project" />
            </div>
            <div className={styles.itemListItem}>
              +3
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <h3 className={styles.aboutTitle}>
            О проекте
          </h3>
          <ul className={styles.aboutList}>
            <li className={styles.aboutListItem}>
              <h3>Доходность</h3>
              <h4>~40%</h4>
            </li>
            <li className={styles.aboutListItem}>
              <h3>Распределение дохода</h3>
              <h4>за 12 мес</h4>
            </li>
            <li className={styles.aboutListItem}>
              <h3>Сбор средств</h3>
              <h4>до 20.10.2024</h4>
            </li>
            <li className={styles.aboutListItem}>
              <h3>Нужно для проекта</h3>
              <h4>$ 100 млн</h4>
            </li>
            <li className={styles.aboutListItem}>
              <h3>Инвестиции застройщика</h3>
              <h4>$ 22 млн</h4>
            </li>
            <li className={styles.aboutListItem}>
              <h3>Проинвестировали</h3>
              <h4>$ 4.4 млн</h4>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h3>Для вас проекты пока заблокированы</h3>
          <p>Нужно, чтобы на вашем счету было от 8 млн сум инвестиций для разблокировки нового раздела</p>
        </div>
        <button className={styles.blockButton}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99967 18.334C4.54134 18.334 4.14912 18.1709 3.82301 17.8448C3.4969 17.5187 3.33356 17.1262 3.33301 16.6673V8.33399C3.33301 7.87565 3.49634 7.48343 3.82301 7.15732C4.14967 6.83121 4.5419 6.66787 4.99967 6.66732H5.83301V5.00065C5.83301 3.84787 6.2394 2.86537 7.05217 2.05315C7.86495 1.24093 8.84745 0.83454 9.99967 0.833985C11.1519 0.833429 12.1347 1.23982 12.948 2.05315C13.7613 2.86649 14.1675 3.84898 14.1663 5.00065V6.66732H14.9997C15.458 6.66732 15.8505 6.83065 16.1772 7.15732C16.5038 7.48399 16.6669 7.87621 16.6663 8.33399V16.6673C16.6663 17.1257 16.5033 17.5182 16.1772 17.8448C15.8511 18.1715 15.4586 18.3345 14.9997 18.334H4.99967ZM4.99967 16.6673H14.9997V8.33399H4.99967V16.6673ZM9.99967 14.1673C10.458 14.1673 10.8505 14.0043 11.1772 13.6782C11.5038 13.352 11.6669 12.9595 11.6663 12.5007C11.6658 12.0418 11.5027 11.6495 11.1772 11.324C10.8516 10.9984 10.4591 10.8351 9.99967 10.834C9.54023 10.8329 9.14801 10.9962 8.82301 11.324C8.49801 11.6518 8.33467 12.044 8.33301 12.5007C8.33134 12.9573 8.49467 13.3498 8.82301 13.6782C9.15134 14.0065 9.54356 14.1695 9.99967 14.1673ZM7.49967 6.66732H12.4997V5.00065C12.4997 4.30621 12.2566 3.71593 11.7705 3.22982C11.2844 2.74371 10.6941 2.50065 9.99967 2.50065C9.30523 2.50065 8.71495 2.74371 8.22884 3.22982C7.74273 3.71593 7.49967 4.30621 7.49967 5.00065V6.66732Z" fill="white" />
          </svg>
          <h3>Пока нельзя инвестировать</h3>
        </button>
        <button type='button' className={styles.tip}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4921_9744)">
              <path d="M7.00001 13.3304C5.56403 12.6493 4.4026 11.4997 3.7067 10.0709C3.0108 8.64199 2.82186 7.01883 3.17096 5.46831C3.52005 3.91779 4.3864 2.53223 5.62753 1.53947C6.86866 0.54671 8.41068 0.00585938 10 0.00585938C11.5893 0.00585938 13.1314 0.54671 14.3725 1.53947C15.6136 2.53223 16.48 3.91779 16.8291 5.46831C17.1782 7.01883 16.9892 8.64199 16.2933 10.0709C15.5974 11.4997 14.436 12.6493 13 13.3304V16.0004H7.00001V13.3304ZM7.00001 17.0004H13V18.5004C13 19.3304 12.33 20.0004 11.5 20.0004H8.50001C8.10218 20.0004 7.72065 19.8424 7.43935 19.5611C7.15804 19.2798 7.00001 18.8982 7.00001 18.5004V17.0004ZM9.00001 11.9004V14.0004H11V11.9004C12.2141 11.6526 13.2928 10.9628 14.0272 9.96483C14.7616 8.96682 15.0992 7.73169 14.9747 6.49889C14.8502 5.26609 14.2723 4.12344 13.3532 3.29248C12.434 2.46151 11.2391 2.00144 10 2.00144C8.76093 2.00144 7.56599 2.46151 6.64685 3.29248C5.72772 4.12344 5.14986 5.26609 5.02533 6.49889C4.90079 7.73169 5.23844 8.96682 5.97281 9.96483C6.70718 10.9628 7.78596 11.6526 9.00001 11.9004Z" fill="#828DA1" />
            </g>
            <defs>
              <clipPath id="clip0_4921_9744">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h3>Как открыть доступ к проектам?</h3>
        </button>
      </div>
    </div>
  </>
}

export default ProjectDetail