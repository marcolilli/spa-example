import {useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import currentLocationIconUrl from "./current-location-svgrepo-com.svg";
import L, {LatLng} from "leaflet";

const currentLocationIcon = L.icon({
    iconUrl: currentLocationIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
});

export default function LocationIndicator() {
    const [position, setPosition] = useState<LatLng | null>(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
        setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom(), {
                duration: 0.5,
            })
        },
    })

    if (position === null) {
        return null;
    }

    return (
        <>
            <Marker position={position} icon={currentLocationIcon}>
                <Popup>You are here</Popup>
            </Marker>
        </>
    )
}