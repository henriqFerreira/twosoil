import { DrawEvents, Polygon } from "leaflet";
import { useRef, useState } from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import { PolygonType } from "../types/PoligonType";
import { NewAreaType } from  "../types/NewAreaType";

export const DrawMap = ( { setAreaPolygonGlobal }: any ) => {         //tipar corretamente esse trem ai sô

    const [polygon, setPolygon] = useState<PolygonType[]>([]);

    const _onCreated = (e: any) => {
        // console.log('Created:' , e);
        // console.log(e.layer.getLatLngs()[0]);
        const { layerType, layer } = e;
        if (layerType === 'polygon') {
            const { _leaflet_id } = layer;
            setPolygon((layers) => [
                ...layers, { id: _leaflet_id, latlngs: layer.getLatLngs()[0],  }
            ])
            setAreaPolygonGlobal((layers: object[]) => [
                ...layers, { id: _leaflet_id, latlngs: layer.getLatLngs()[0],  }
            ])
        }
    }

    const _onEdited = (e: any) => {
        // console.log('Edited:' , e);
        const {layers: {_layers}, } = e;

        Object.values(_layers).map(({ _leaflet_id, editing }: any) => 
        setPolygon((layers) => 
            layers.map( l => l.id === _leaflet_id ? 
                { ...l, latlngs: 
                    {...editing.latlngs[0]} 
                }
                : l
            ))
        );

        Object.values(_layers).map(({ _leaflet_id, editing }: any) => setAreaPolygonGlobal((layers: any) => 
        layers.map( (l: any) => l.id === _leaflet_id ? 
            { ...l, latlngs: {...editing.latlngs[0]}}
            : l
        )));
    };

    const _onDeleted = (e: any) => {
        // console.log('Deleted:', e);
        const {layers: {_layers}, } = e;

        Object.values(_layers).map(({ _leaflet_id }: any) => setPolygon((layers) => layers.filter((l) => l.id !== _leaflet_id)));
    };

    return(
        <>
            <FeatureGroup>
                <EditControl 
                    position='topright'
                    onCreated={_onCreated}
                    // onEdited={_onEdited}
                    // onDeleted={_onDeleted}
                    draw={{
                        rectangle: false,
                        polyline: false,
                        circle: false,
                        circlemarker: false,
                        marker: false,
                    }}
                    edit={{
                        edit: false,
                        remove: false
                    }}       
                />
            </FeatureGroup>
        </>
    )
}