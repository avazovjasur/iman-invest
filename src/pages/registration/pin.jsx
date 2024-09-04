import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/modules/pin.module.scss';

const Pin = () => {
    const [pin, setPin] = useState('');
    const router = useRouter();

    const handleNumberClick = (number) => {
        if (pin.length < 4) {
            setPin(prevPin => prevPin + number);
        }
    };

    const handleDelete = () => {
        setPin(prevPin => prevPin.slice(0, -1));
    };

    const handleComplete = () => {
        if (pin.length === 4) {
            router.push('/home')
        }
    };

    if (pin.length === 4) {
        handleComplete();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Установите PIN-код</h1>
            <p className={styles.subtitle}>Этот PIN-код будет использоваться <br />для входа в приложение</p>
            
            <div className={styles.pinIndicators}>
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.pinIndicator} ${index < pin.length ? styles.filled : ''}`}
                    />
                ))}
            </div>
            
            <div className={styles.numberPad}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                    <button
                        key={number}
                        className={styles.numberButton}
                        onClick={() => handleNumberClick(number.toString())}
                    >
                        {number}
                    </button>
                ))}
                <button className={styles.deleteButton} onClick={handleDelete}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4564_18208)">
<path d="M23.333 7C23.6424 7 23.9392 7.12292 24.158 7.34171C24.3767 7.5605 24.4997 7.85725 24.4997 8.16667V19.8333C24.4997 20.1428 24.3767 20.4395 24.158 20.6583C23.9392 20.8771 23.6424 21 23.333 21H10.4997L4.66633 15.1667C4.37936 14.8458 4.2207 14.4305 4.2207 14C4.2207 13.5695 4.37936 13.1542 4.66633 12.8333L10.4997 7H23.333Z" stroke="#040415" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 11.667L14 16.3337M14 11.667L18.6667 16.3337L14 11.667Z" stroke="#040415" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4564_18208">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>

                </button>
            </div>
        </div>
    );
};

export default Pin;