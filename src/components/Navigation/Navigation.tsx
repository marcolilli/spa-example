import {Link, useLocation} from "wouter";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [location] = useLocation();

    return (
        <nav className={styles.header}>
            <ul>
                <li className={location === "/" ? "active" : ""}>
                    <Link href={"/"}>Start Page</Link>
                </li>
                <li className={location === "/about" ? "active" : ""}>
                    <Link href={"/about"}>About Page</Link>
                </li>
                <li className={location === "/modal-example" ? "active" : ""}>
                    <Link href={"/modal-example"}>Modal Example Page</Link>
                </li>
                <li className={location === "/background-image" ? "active" : ""}>
                    <Link href={"/background-image"}>Background Image Page</Link>
                </li>
                <li className={location === "/weather" ? "active" : ""}>
                    <Link href={"/weather"}>Weather Page</Link>
                </li>
                <li className={location === "/map" ? "active" : ""}>
                    <Link href={"/map"}>Map Page</Link>
                </li>
                <li className={location === "/qr-code" ? "active" : ""}>
                    <Link href={"/qr-code"}>QR Code Page</Link>
                </li>
                <li className={location === "/camera" ? "active" : ""}>
                    <Link href={"/camera"}>Camera Page</Link>
                </li>
            </ul>
        </nav>
    )
}
