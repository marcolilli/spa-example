import Page1 from "./components/Page1.tsx";
import {Link, Route} from "wouter";
import Page2 from "./components/Page2.tsx";

const basePath = import.meta.env.BASE_URL

function joinPathSegments(...segments: string[]) {
    return segments.join('/').replace(/\/+/g, '/');
}

function createPath(name: string) {
    const path = name.toLowerCase().replace(' ', '-');
    return joinPathSegments(basePath, path);
}

function App() {
    const pages = [
        {
            name: 'Page A',
            component: <Page1/>
        },
        {
            name: 'Page B',
            component: <Page2/>
        }
    ]
    


    return (
        <div>
            <nav>
                <ul>
                    <li><Link href={basePath}>Home</Link></li>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <Link href={createPath(page.name)}>
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {pages.map((page, index) => (
                <Route
                    key={index}
                    path={createPath(page.name)}
                    component={() => page.component}
                />
            ))
            }
        </div>
    )
}

export default App
