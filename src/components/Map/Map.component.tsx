"use client";

import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";

export default function Map() {
	return (
		<MapContainer
			className={styles.mapContainer}
			center={[0, 0]}
			zoom={5}
			scrollWheelZoom={true}
		>
			<LayersControl>
				<LayersControl.BaseLayer checked name="ESRI World Imagery">
					<TileLayer
						attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
						url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="OpenStreetMap">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
			</LayersControl>
		</MapContainer>
	);
}
