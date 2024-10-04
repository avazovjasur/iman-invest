import {useRouter} from "next/router";
import styles from "@/styles/modules/success.module.scss";

const Success = () => {
    const router = useRouter()

    function toHome () {
        router.push('/home')
    }

    return <>
        <div className={styles.successContainer}>
            <div className={styles.successBlock}>
                <div>
                    <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_5918_68167)">
                            <ellipse cx="36.5" cy="37.4937" rx="35.5064" ry="35.5064" fill="white" fill-opacity="0.1"/>
                            <path
                                d="M36.5 73.5001C56.3858 73.5001 72.5064 57.3795 72.5064 37.4937C72.5064 17.6079 56.3858 1.4873 36.5 1.4873C16.6143 1.4873 0.493652 17.6079 0.493652 37.4937C0.493652 57.3795 16.6143 73.5001 36.5 73.5001Z"
                                stroke="url(#paint0_linear_5918_68167)"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M47.5849 30.4941C48.0405 30.9497 48.0405 31.6884 47.5849 32.144L34.5715 45.1573C34.1159 45.6129 33.3772 45.6129 32.9216 45.1573L26.415 38.6506C25.9593 38.195 25.9593 37.4563 26.415 37.0007C26.8706 36.5451 27.6093 36.5451 28.0649 37.0007L33.7466 42.6824L45.935 30.4941C46.3906 30.0384 47.1293 30.0384 47.5849 30.4941Z"
                              fill="white"/>
                        <defs>
                            <filter id="filter0_b_5918_68167" x="-15.0063" y="-14.0127" width="103.013" height="103.013"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5"/>
                                <feComposite in2="SourceAlpha" operator="in"
                                             result="effect1_backgroundBlur_5918_68167"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5918_68167"
                                         result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_5918_68167" x1="12.2977" y1="10.2604" x2="73.528"
                                            y2="69.2603" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.25"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.successTitle}>Успешно инвестировано!</div>
                <div className={styles.successDesc}>
                    Цель «Автомобиль 🏎 » пополнена на 150 000 000 сум с карты *** 1783
                </div>
            </div>
            <button className={styles.contentButton} onClick={toHome}>Отлично</button>
        </div>
    </>
}

export default Success
