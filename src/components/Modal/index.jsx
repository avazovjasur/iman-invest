import { useEffect, useRef } from "react";
import styles from './Modal.module.scss';

function Modal({ openModal, closeModal, children }) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
            className={styles.mainDialog}
        >
            {children}
        </dialog>
    );
}

export default Modal;
