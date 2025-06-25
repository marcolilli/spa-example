import Webcam from "react-webcam";
import {useRef, useState} from "react";
import {Button} from "./Button.tsx";

export default function Camera() {
    const cameraRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string>();

    function takePic() {
        const capturedImage = cameraRef.current?.getScreenshot();

        if (capturedImage) {
            setImage(capturedImage);
        }
    }

    function retakePic(){
        setImage(undefined)
    }

    return (
        <div>
            {image
                ? <img src={image}/>
                : <Webcam mirrored ref={cameraRef} screenshotFormat={"image/jpeg"}/>
            }

            <Button label={"Take pic"} onClickHandler={takePic}/>
            <Button label={"Retake"} onClickHandler={retakePic}/>
        </div>
    );
}