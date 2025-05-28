import RenderVisualizer from "./RenderVisualizer.tsx";
import {useState} from "react";

export function CounterController(){
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <RenderVisualizer count={count}/>
        </div>
    );
}