import {Button} from "./Button.tsx";

export default function Counter() {
    let count = 0;

    function increaseCounter() {
        count++;
        console.log("Count increased to: " + count);
    }

    function decreaseCounter() {
        count--;
        console.log("Count decreased to: " + count);
    }

    return (
        <div>
            <Button label={"Increase Count"} onClickHandler={increaseCounter}/>
            <Button label={"Decrease Count"} onClickHandler={decreaseCounter}/>
        </div>
    )
}