import Card from "../components/Card/Card.tsx";
import {Button} from "../components/Button.tsx";

export default function StartPage(){
    return(
        <section>
            <h1>Start</h1>
            <p>hello this is the start page</p>


            <Card padding>
                <h1>Card</h1>
                <p>THis is a paragraph</p>
                <Button label={"my Button"}/>
            </Card>


            <Card padding>
               <img src={"https://placehold.co/200x400/jpg"}/>
            </Card>

            <Card padding>
                <Card padding>
                    <h3>child child</h3>
                </Card>
            </Card>
        </section>
    )
}