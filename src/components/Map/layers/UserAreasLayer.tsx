import { LeafletMouseEvent } from "leaflet";
import {
	GeoJSON,
	GeoJSONProps,
	LayerGroup,
	LayersControl,
} from "react-leaflet";

type UserAreasLayerProperties = {} & GeoJSONProps;

export default function UserAreasLayer(properties: UserAreasLayerProperties) {
	const { data } = properties;

	const layer = (
		<GeoJSON
			data={data}
			style={{
				color: "#2003ab",
				weight: 2,
			}}
		/>
	);

	return (
		<LayersControl.Overlay checked name="Áreas do usuário">
			<LayerGroup>{layer}</LayerGroup>
		</LayersControl.Overlay>
	);
}
