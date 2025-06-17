import Card from "../Card/Card.tsx";
import {useEffect, useState} from "react";

export default function WeatherWidget() {
    const [currentTemp, setCurrentTemp] = useState<number>();

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=8589d7590569626ac476f3d497b8b44e&units=metric")
            .then(async (response) => {
                const data = await response.json()

                setCurrentTemp(data.main.temp)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <Card>
            <h3>Weather widget</h3>
            <p>Current temp: {currentTemp}</p>
        </Card>
    );
}