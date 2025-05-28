import type {FC} from "react";
import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps{
    label: string;
    onClickHandler?: (text: string) => void;
    large?: boolean;
}

export const Button: FC<ButtonProps> = ({label, onClickHandler, large}) =>  {
    return (
        <button
            className={cn(large && styles.large)}
            onClick={() => onClickHandler && onClickHandler("hello!!")}>
                {label.toUpperCase()}
        </button>
    );
}