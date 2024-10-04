import { useEffect, useRef } from "react";
import styles from './Modal.module.scss';

function Modal({ openModal, closeModal, children }) {
    const modalRef  = useRef();

    const handleClickOutside  = (e) => {
        if (modalRef.current.className === e.target.className) {
            closeModal();
        }
    }

    useEffect(() => {
        if (openModal) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [openModal]);

    return (
        <dialog
            ref={modalRef}
            onCancel={closeModal}
            className={styles.mainDialog}
            onClick={handleClickOutside}
        >
            <div className={styles.mainDialogBody}>
                {children}
            </div>
        </dialog>
    );
}

export default Modal;
