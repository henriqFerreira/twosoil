import { Dispatch, SetStateAction } from "react";
import {
	GeoJSON,
	GeoJSONProps,
	LayerGroup,
	LayersControl,
} from "react-leaflet";

type UserAreasLayerProperties = {
	getter: () => GeoJSON.Feature | null;
	setter: Dispatch<SetStateAction<GeoJSON.Feature<GeoJSON.Polygon> | null>>;
} & GeoJSONProps;

export default function UserAreasLayer(
	properties: UserAreasLayerProperties,
): JSX.Element {
	const { data, setter, getter } = properties;

	const layer = (
		<GeoJSON
			data={data}
			eventHandlers={{
				click: (e) => {
					const feature = e.propagatedFrom.feature;
					const gottenFeature = getter();

					if (feature === gottenFeature) {
						setter(null);
						return;
					}

					setter(feature);
				},
			}}
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
