import useSWR from "swr";
import {fetcher} from "../utils/fetcher.ts";
import Card from "./Card/Card.tsx";

export default function WeatherWidgetSWR() {
    const {error, isLoading, data} = useSWR("https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=8589d7590569626ac476f3d497b8b44e&units=metric", fetcher)

    if (error) {
        return <Card>Error fetching weather data</Card>
    }

    if (isLoading) {
        return <Card skeleton>
            Loading…
        </Card>
    }

    return (
        <Card>
            Current temp: {data.main.temp}
        </Card>
    );
}