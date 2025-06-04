import Card from "../components/Card.tsx";
import {Button} from "../components/Button.tsx";

export default function StartPage(){
    return(
        <section>
            <h1>Start</h1>
            <p>hello this is the start page</p>


            <Card>
                <h1>Card</h1>
                <p>THis is a paragraph</p>
                <Button label={"my Button"}/>
            </Card>


            <Card>
               <img src={"https://placehold.co/200x400/jpg"}/>
            </Card>

            <Card>
                <Card>
                    <h3>child child</h3>
                </Card>
            </Card>
        </section>
    )
}