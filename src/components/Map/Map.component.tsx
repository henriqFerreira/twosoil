"use client";

import { Dispatch, RefObject, SetStateAction, useState } from "react";
import {
	GeoJSONProps,
	LayersControl,
	MapContainer,
	TileLayer,
} from "react-leaflet";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import { DrawMap } from "./controls/DrawMap.component";

import { PolygonType } from "./types/PoligonType";
import useSession from "@/src/context/useSession.hook";
import UserAreasLayer from "./layers/UserAreasLayer";
import featuresToFeatureCollection from "@/src/utils/featuresToFeatureCollection.util";
import DefaultAreasLayer from "./layers/DefaultAreasLayer";
import { Map as LeafletMap } from "leaflet";

type MapProperties = {
	forwardRef: RefObject<LeafletMap>;
	defaultPolygons: {
		get: () => void;
		set: Dispatch<SetStateAction<boolean>>;
		checked: boolean;
	};
	userMappedPolygons: {
		get: () => GeoJSON.Feature | null;
		set: Dispatch<SetStateAction<GeoJSON.Feature<GeoJSON.Polygon> | null>>;
	};
};

export default function Map(properties: MapProperties) {
	const { forwardRef, defaultPolygons, userMappedPolygons } = properties;

	const { session } = useSession();
	const { mappedPolygons, userPolygons } = session;

	const [areaPolygonGlobal, setAreaPolygonGlobal] = useState<PolygonType[]>(
		[],
	);

	return (
		<MapContainer
			ref={forwardRef}
			className={styles.mapContainer}
			center={[-23.14854527489196, -45.82375093421496]}
			zoom={13}
			scrollWheelZoom={true}
		>
			<LayersControl>
				<LayersControl.BaseLayer checked name="ESRI World Imagery">
					<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="OpenStreetMap">
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				</LayersControl.BaseLayer>
				<DefaultAreasLayer
					data={mappedPolygons as GeoJSONProps["data"]}
					checked={defaultPolygons.checked}
					setter={defaultPolygons.set}
				/>
				<UserAreasLayer
					data={
						featuresToFeatureCollection(
							userPolygons,
						) as GeoJSONProps["data"]
					}
					getter={userMappedPolygons.get}
					setter={userMappedPolygons.set}
				/>
			</LayersControl>
			<DrawMap setAreaPolygonGlobal={setAreaPolygonGlobal} />
		</MapContainer>
	);
}
