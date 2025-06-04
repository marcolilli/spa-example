import Profile from "./components/Profile/Profile.tsx";
import {Route, Switch} from "wouter";
import AboutPage from "./pages/AboutPage.tsx";
import StartPage from "./pages/StartPage.tsx";
import {Fragment} from "react";
import Navigation from "./components/Navigation/Navigation.tsx";
import {Button} from "./components/Button.tsx";
import ModalExamplePage from "./pages/ModalExamplePage.tsx";

type Profiles = Array<{
    name: string;
    age: number;
    imageUrl: string;
}>

const profiles: Profiles = [
    {
        name: "Mary",
        age: 42,
        imageUrl: "https://placehold.co/600x400"
    },
    {
        name: "John",
        age: 35,
        imageUrl: "https://placehold.co/600x400"
    },
    {
        name: "Mike",
        age: 28,
        imageUrl: "https://placehold.co/600x400"
    }, {
        name: "Jake",
        age: 17,
        imageUrl: "https://placehold.co/600x400"
    }
]

export default function App() {
    return (
        <Fragment>
            <Navigation/>

            <Button label={"Click here"} large/>

            <Switch>
                <Route path={"/"} component={StartPage}/>
                <Route path={"/about"} component={AboutPage}/>
                <Route path={"/profile/:name"}>
                    {(params) => {
                        const matchedProfile = profiles.find((p) => p.name === params.name);

                        if (matchedProfile === undefined) {
                            return <h1>Profile not found</h1>
                        }

                        return (
                            <Profile name={matchedProfile.name}
                                     age={matchedProfile.age}
                                     imageUrl={matchedProfile.imageUrl}
                            />
                        )
                    }}
                </Route>
                <Route path={"/modal-example"} component={ModalExamplePage}/>

                <Route>404: Path not found!</Route>
            </Switch>
        </Fragment>
        /* <div className={"page-content"}>
             <div className={"card-grid"}>
                 {profiles.map((p, index) => {
                     return (
                         <div
                             onMouseEnter={() => {
                                 console.log("Mouse entered a profile")
                             }}
                             onMouseLeave={() => {
                                 console.log("Mouse left a profile")
                             }}
                             key={index}>
                             <Profile name={p.name} age={p.age} imageUrl={p.imageUrl} key={index}/>
                         </div>
                     )
                 })}
             </div>

             <hr/>

             <Counter/>

             <hr/>

             <CounterController/>

             <hr/>

             {[1, 2, 3, 4, 5].map((_, index) =>
                 <ToggleBox key={index}/>
             )}

             <hr/>

             <WindowWidth/>
         </div>*/
    );
}
