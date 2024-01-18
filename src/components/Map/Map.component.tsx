"use client";

import { useState } from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import { DrawMap } from './controls/DrawMap.component';
import { AreasSJCLayer } from './layers/areaSJCLayer';

import { dataAreasSJC } from "./data/dataAreaSJC";

export default function Map() {

	const [geoFilter, setGeoFilter] = useState(null);   // Será utilizado para pegar o estado do GeoFilter
    const getGeoFilter = () => geoFilter   

	return (
		<MapContainer
			className={styles.mapContainer}
			center={[0, 0]}
			zoom={5}
			scrollWheelZoom={true}
		>
			<LayersControl>
				<LayersControl.BaseLayer  name="ESRI World Imagery">
					<TileLayer
						attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
						url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer checked name="OpenStreetMap">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
				< AreasSJCLayer data={dataAreasSJC} setGeoFilter={setGeoFilter} getGeoFilter={getGeoFilter} checked={true}/>
			</LayersControl>
			< DrawMap />
		</MapContainer>
	);
}
