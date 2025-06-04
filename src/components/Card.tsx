import type {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
}

export default function Card({children}: CardProps) {
    return (
        <div style={{borderRadius: "1rem", backgroundColor: "lightblue", padding: "4rem", margin: "2rem", border: "0.2rem solid black"}}>
            <h1>Card headline</h1>
            {children}
        </div>
    )
}