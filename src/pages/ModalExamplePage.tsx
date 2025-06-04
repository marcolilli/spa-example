import Modal from "../components/Modal/Modal"
import {useState} from "react";

export default function ModalExamplePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section>
            <h1>Modal Example Page</h1>

            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

            <Modal isOpen={isModalOpen} onChange={setIsModalOpen}/>
        </section>
    );
}