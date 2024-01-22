import {
	DetailedHTMLProps,
	HTMLAttributes,
	MouseEventHandler,
	RefObject,
} from "react";
import styles from "./AreaItem.module.scss";
import { LatLng, Map as LeafletMap } from "leaflet";

type AreaItemProperties = {
	name: string;
	cropType: string;
	mapRef: RefObject<LeafletMap>;
	feature: GeoJSON.Feature<GeoJSON.Polygon>;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function AreaItem(properties: AreaItemProperties) {
	const { name, cropType, mapRef, feature } = properties;

	const onClick: MouseEventHandler<HTMLButtonElement> = () => {
		if (!mapRef.current) return;

		const map = mapRef.current;

		const latLng: LatLng = new LatLng(
			feature.geometry.coordinates[0][0][1],
			feature.geometry.coordinates[0][0][0],
		);

		map.panTo(latLng);
	};

	return (
		<button onClick={onClick} role="listitem" className={styles.item}>
			<p>{name}</p>
			<p>{cropType}</p>
		</button>
	);
}
