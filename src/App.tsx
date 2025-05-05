import Page1 from "./components/Page1.tsx";
import {Link, Route} from "wouter";
import Page2 from "./components/Page2.tsx";
import GreetUser from "./GreetUser.tsx";


function App() {
    const pages = [
        {
            name: 'Page 1',
            component: <Page1/>
        },
        {
            name: 'Page 2',
            component: <Page2/>
        }
    ]


    return (
        <div>
            <nav>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <Link href={`/${page.name.toLowerCase().replace(' ', '-')}`}>
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {pages.map((page, index) => (
                <Route
                    key={index}
                    path={`/${page.name.toLowerCase().replace(' ', '-')}`}
                    component={() => page.component}
                />
            ))
            }

            <GreetUser/>
        </div>
    )
}

export default App
