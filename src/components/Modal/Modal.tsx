import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onChange: (isOpen: boolean) => void;
}

export default function Modal({isOpen, onChange}: ModalProps) {
    if (isOpen) {
        return (
            <div className={styles.modal}>
                <h2>Hi i am a modal</h2>
                <p>this is my text</p>
                <button onClick={() => onChange(false)}>Close</button>
            </div>
        )
    } else {
        return null;
    }
}