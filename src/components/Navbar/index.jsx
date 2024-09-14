import { useState } from 'react';
import styles from './NavBar.module.scss'

const NavBar = ({ activeIndex, setActiveIndex }) => {

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

  return <>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${activeIndex === 0 ? styles.active : ''}`}
          onClick={() => handleNavItemClick(0)}
        >
          <div className={styles.navItemIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2201 2.6879C12.4979 2.12617 11.4866 2.12617 10.7644 2.6879L2.37829 9.21039C1.94235 9.54946 1.86381 10.1777 2.20288 10.6137C2.54195 11.0496 3.17023 11.1282 3.60617 10.7891L11.9922 4.2666L20.3783 10.7891C20.8142 11.1282 21.4425 11.0496 21.7816 10.6137C22.1207 10.1777 22.0421 9.54946 21.6062 9.21039L13.2201 2.6879ZM5.99223 12.9997C5.99223 12.4475 5.54452 11.9997 4.99223 11.9997C4.43995 11.9997 3.99223 12.4475 3.99223 12.9997V17.9997C3.99223 20.2089 5.78309 21.9997 7.99223 21.9997H15.9922C18.2014 21.9997 19.9922 20.2089 19.9922 17.9997V12.9997C19.9922 12.4475 19.5445 11.9997 18.9922 11.9997C18.4399 11.9997 17.9922 12.4475 17.9922 12.9997V17.9997C17.9922 19.1043 17.0968 19.9997 15.9922 19.9997H7.99223C6.88766 19.9997 5.99223 19.1043 5.99223 17.9997V12.9997Z" fill="currentColor" />
              <path d="M13.2201 2.6879C12.4979 2.12617 11.4866 2.12617 10.7644 2.6879L2.37829 9.21039C1.94235 9.54946 1.86381 10.1777 2.20288 10.6137C2.54195 11.0496 3.17023 11.1282 3.60617 10.7891L11.9922 4.2666L20.3783 10.7891C20.8142 11.1282 21.4425 11.0496 21.7816 10.6137C22.1207 10.1777 22.0421 9.54946 21.6062 9.21039L13.2201 2.6879ZM5.99223 12.9997C5.99223 12.4475 5.54452 11.9997 4.99223 11.9997C4.43995 11.9997 3.99223 12.4475 3.99223 12.9997V17.9997C3.99223 20.2089 5.78309 21.9997 7.99223 21.9997H15.9922C18.2014 21.9997 19.9922 20.2089 19.9922 17.9997V12.9997C19.9922 12.4475 19.5445 11.9997 18.9922 11.9997C18.4399 11.9997 17.9922 12.4475 17.9922 12.9997V17.9997C17.9922 19.1043 17.0968 19.9997 15.9922 19.9997H7.99223C6.88766 19.9997 5.99223 19.1043 5.99223 17.9997V12.9997Z" fill="currentColor" />
              <path d="M13.2201 2.6879C12.4979 2.12617 11.4866 2.12617 10.7644 2.6879L2.37829 9.21039C1.94235 9.54946 1.86381 10.1777 2.20288 10.6137C2.54195 11.0496 3.17023 11.1282 3.60617 10.7891L11.9922 4.2666L20.3783 10.7891C20.8142 11.1282 21.4425 11.0496 21.7816 10.6137C22.1207 10.1777 22.0421 9.54946 21.6062 9.21039L13.2201 2.6879ZM5.99223 12.9997C5.99223 12.4475 5.54452 11.9997 4.99223 11.9997C4.43995 11.9997 3.99223 12.4475 3.99223 12.9997V17.9997C3.99223 20.2089 5.78309 21.9997 7.99223 21.9997H15.9922C18.2014 21.9997 19.9922 20.2089 19.9922 17.9997V12.9997C19.9922 12.4475 19.5445 11.9997 18.9922 11.9997C18.4399 11.9997 17.9922 12.4475 17.9922 12.9997V17.9997C17.9922 19.1043 17.0968 19.9997 15.9922 19.9997H7.99223C6.88766 19.9997 5.99223 19.1043 5.99223 17.9997V12.9997Z" fill="currentColor" />
            </svg>
          </div>
          <h3 className={styles.navItemTitle}>Главная</h3>
        </li>
        <li
          className={`${styles.navItem} ${activeIndex === 1 ? styles.active : ''}`}
          onClick={() => handleNavItemClick(1)}
        >
          <div className={styles.navItemIcon}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6V7H9.5V6C9.5 5.44772 9.94772 5 10.5 5ZM7.5 7V6C7.5 4.34315 8.84315 3 10.5 3H14.5C16.1569 3 17.5 4.34315 17.5 6V7H19.5C21.1569 7 22.5 8.34315 22.5 10V19C22.5 20.6569 21.1569 22 19.5 22H5.5C3.84315 22 2.5 20.6569 2.5 19V10C2.5 8.34315 3.84315 7 5.5 7H7.5ZM17.5 9H15.5H9.5H7.5H5.5C4.94772 9 4.5 9.44772 4.5 10V19C4.5 19.5523 4.94772 20 5.5 20H19.5C20.0523 20 20.5 19.5523 20.5 19V10C20.5 9.44771 20.0523 9 19.5 9H17.5Z" fill="currentColor" />
            </svg>
          </div>
          <h3 className={styles.navItemTitle}>Проекты</h3>
        </li>
        <li
          className={`${styles.navItem} ${activeIndex === 2 ? styles.active : ''}`}
          onClick={() => handleNavItemClick(2)}
        >
          <div className={styles.navItemIcon}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4934_8252)">
                <rect x="2.00781" y="2" width="7" height="7" rx="1" fill="#ffffff" stroke="currentColor" stroke-width="2" />
                <rect x="16.5078" y="0.549956" width="7" height="7" rx="1" transform="rotate(45 16.5078 0.549956)" fill="#ffffff" stroke="currentColor" stroke-width="2" />
                <rect x="2.00781" y="13" width="7" height="7" rx="1" fill="#ffffff" stroke="currentColor" stroke-width="2" />
                <rect x="13.0078" y="13" width="7" height="7" rx="1" fill="#ffffff" stroke="currentColor" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_4934_8252">
                  <rect width="22" height="22" fill="#ffffff" transform="translate(0.0078125)" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <h3 className={styles.navItemTitle}>С чего начать?</h3>
        </li>
      </ul>
    </nav>
  </>
}

export default NavBar