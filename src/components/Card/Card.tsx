import type {ReactNode} from "react";
import styles from "./Card.module.css";
import cn from "classnames";

interface CardProps {
    children: ReactNode;
    padding?: boolean;
    skeleton?: boolean;
}

export default function Card({children, padding, skeleton}: CardProps) {
    return (
        <div className={cn(styles.card, padding && styles.padding, skeleton && styles.skeleton)}>
            {children}
        </div>
    )
}