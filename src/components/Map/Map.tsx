import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import styles from "./Map.module.css";
import LocationIndicator from "./LocationIndicator.tsx";
import RoutingControl from "./RoutingControl.tsx";

export default function Map() {
    const route: [number, number][] = [
        [50.9853, 12.9770],
        [50.9840, 12.9790],
        [50.9860, 12.9770],
    ];

    return (
        <MapContainer center={[50.9853, 12.9770]} zoom={15} scrollWheelZoom={false} className={styles.map}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[50.9853, 12.9770]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
            <LocationIndicator/>

           {/* <Polyline positions={[
                [50.9853, 12.9770],
                [50.9840, 12.9790],
                [50.9860, 12.9770],
            ]} color="blue"/>*/}

            <RoutingControl waypoints={route}/>
        </MapContainer>
    )
}