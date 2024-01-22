import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	MouseEventHandler,
	RefObject,
	SetStateAction,
} from "react";
import styles from "./AreaItem.module.scss";
import { LatLng, Map as LeafletMap } from "leaflet";
import centroid from "@/src/utils/calculateCentroid.util";

type AreaItemProperties = {
	name: string;
	cropType: string;
	mapRef: RefObject<LeafletMap>;
	feature: GeoJSON.Feature<GeoJSON.Polygon>;
	setter: Dispatch<SetStateAction<GeoJSON.Feature | null>>;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function AreaItem(properties: AreaItemProperties) {
	const { name, cropType, mapRef, feature, setter } = properties;

	const onClick: MouseEventHandler<HTMLButtonElement> = () => {
		if (!mapRef.current) return;

		const map = mapRef.current;

		const center = centroid(feature.geometry);

		const latLng: LatLng = new LatLng(center[1], center[0]);

		map.panTo(latLng);
	};

	return (
		<button onClick={onClick} role="listitem" className={styles.item}>
			<p>{name}</p>
			<p>{cropType}</p>
		</button>
	);
}
