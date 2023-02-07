import { Map, Marker, Popup } from "maplibre-gl";
import { MapContext } from "./MapContext";
import { useReducer } from "react";
import { mapReducer } from "./mapReducer";

export interface MapState {
    isMapReady: boolean;
    map?: Map;
}

const INITIAL_STATE: MapState = {
    isMapReady: true,
    map: undefined,
}

export const MapProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const setMap = (map: Map) => {

        const myLocationPopUp = new Popup().setHTML(`
        <h4>Aqui estoy</h4>
        <p>En algun lugar del mundo</p>
        `)
        new Marker({ color: 'purple' }).setLngLat(map.getCenter()).setPopup(myLocationPopUp).addTo(map)

        dispatch({ type: 'setMap', payload: map })
    }

    return (
        <MapContext.Provider value={{
            ...state,

            // Methods
            setMap
        }}>
            {children}
        </MapContext.Provider>
    )
}