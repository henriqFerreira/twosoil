import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import styles from "./CardMap.module.scss";
import centroid from "@/src/utils/calculateCentroid.util";
import { LatLngExpression } from "leaflet";

type CardMapProperties = {
	isCollapsed: boolean;
	data: GeoJSON.Feature<GeoJSON.Polygon> | null;
};

export function CardMap(props: CardMapProperties) {
	const { isCollapsed, data } = props;

	const properties = data && data.properties!;

	return (
		<aside
			className={`${styles.container} ${isCollapsed && styles.collapsed}`}
		>
			{data && properties && (
				<>
					<MapContainer
						className={styles.mapContainer}
						center={
							[
								centroid(data.geometry)[1],
								centroid(data.geometry)[0],
							] as LatLngExpression
						}
						zoom={12}
						scrollWheelZoom={false}
						zoomControl={false}
					>
						<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
						<GeoJSON data={data} />
					</MapContainer>
					<h1>{properties.area_name}</h1>
					<p>Id: {properties.area_id}</p>
					<hr />
					<section className={styles.details}>
						<h2>Tipo de plantio</h2>
						<p>{properties.crop_name}</p>
					</section>
					<section className={styles.metadata}>
						<h4>Latitude e Longitude</h4>
						<small>{data.geometry.coordinates.toString()}</small>
					</section>
				</>
			)}
		</aside>
	);
}
