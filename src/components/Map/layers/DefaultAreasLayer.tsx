import useSession from "@/src/context/useSession.hook";
import addNewPolygon from "@/src/service/addNewPolygon";
import { Dispatch, SetStateAction } from "react";
import {
	LayerGroup,
	LayersControl,
	GeoJSON,
	GeoJSONProps,
} from "react-leaflet";

type DefaultAreasLayerProperties<T> = {
	setter: Dispatch<SetStateAction<boolean>>;
	checked: boolean;
} & GeoJSONProps;

export default function DefaultAreasLayer<T>(
	properties: DefaultAreasLayerProperties<T>,
): JSX.Element {
	const { data, checked, setter } = properties;

	const { reload } = useSession();

	const layer = (
		<GeoJSON
			data={data}
			style={{
				color: "yellow",
				weight: 2,
			}}
			eventHandlers={{
				click: (e) => {
					const feature = e.propagatedFrom.feature;
					console.log(feature);

					addNewPolygon(feature).finally(() => {
						setter(false);
						reload();
					});
				},
			}}
		/>
	);

	return (
		<LayersControl.Overlay checked={checked} name="Áreas predefinidas">
			<LayerGroup>{layer}</LayerGroup>
		</LayersControl.Overlay>
	);
}
