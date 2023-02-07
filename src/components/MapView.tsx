import { useContext, useLayoutEffect, useRef } from "react"
import { MapContext, PlacesContext } from "../context"
import { Loading } from "./"
import maplibregl from 'maplibre-gl'; // or "const maplibregl = require('maplibre-gl');"

const key = 'VG1JDYtK23WUOekPuYtL';
export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext)
    const { setMap } = useContext(MapContext)
    const mapDiv = useRef<HTMLDivElement>(null)

    
    useLayoutEffect(() => {
        if(!isLoading){
            const map = new maplibregl.Map({
                container: mapDiv.current!,
                style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`, // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 7 // starting zoom
            });

            setMap(map)

        }
    }, [isLoading])
    
    if ( isLoading ) {
        return ( <Loading /> )
    }

    return (
        <div ref={mapDiv}
            style={{
                backgroundColor: 'purple',
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw'
            }}>
            {userLocation?.join(',')}
        </div>
    )
}
