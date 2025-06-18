import BarcodeScanner from "react-qr-barcode-scanner";

interface QRCodeScannerProps {
    onDetect: (result: string) => void;
}

export default function QRCodeScanner({onDetect}: QRCodeScannerProps) {
    return (
        <BarcodeScanner
            width={500}
            height={500}
            onUpdate={(_, result) => {
                const text = result?.getText();

                if (text) {
                    onDetect(text);
                }
            }}
        />
    );
}