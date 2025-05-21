import {useState} from "react";

export default function ToggleBox() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <button onClick={toggleActive}>Toggle</button>
            {isActive && <span>Active</span>}
        </div>
    )
}