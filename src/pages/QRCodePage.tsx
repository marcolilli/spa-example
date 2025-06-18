import QRCodeScanner from "../components/QRCodeScanner.tsx";
import {useLocation} from "wouter";

export default function QRCodePage() {
    const [, navigate] = useLocation();

    function handleQRCodeDetected(result: string) {
        navigate(result);
    }

    return (
        <QRCodeScanner onDetect={handleQRCodeDetected}/>
    )
}