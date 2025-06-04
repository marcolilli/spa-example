import {Link, useLocation} from "wouter";

export default function Navigation() {
    const [location] = useLocation();

    return (
        <nav>
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
            </ul>
        </nav>
    )
}
