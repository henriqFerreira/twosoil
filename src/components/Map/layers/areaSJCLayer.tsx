import { GeoJSON, LayersControl, LayerGroup } from "react-leaflet";

export const AreasSJCLayer = ({ data, setGeoFilter, getGeoFilter }: any) => {
    
    const geoFilter = getGeoFilter();

    const layer = (
        <>
            <GeoJSON 
                key='geo-json-areas-SJC'
                data={data}
                eventHandlers={{
                    click: (e) => {
                        setGeoFilter((prevState: any) => {
                            const same = prevState === e.propagatedFrom.feature
                            return same ? null : e.propagatedFrom.feature;
                        })
                    }
                }}
                style={(feature) => {
                    return {
                        color: geoFilter === feature ? 'red' : 'blue',
                        weight: 0.5,
                        fillOpacity: geoFilter === feature? 0.4 : 0.25
                    }
                }}
            ></GeoJSON>
        </>
    );
    return (
        <LayersControl.Overlay name="Areas-SJC">
            <LayerGroup>{layer}</LayerGroup>
        </LayersControl.Overlay>
    )
}