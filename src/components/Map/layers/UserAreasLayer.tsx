import {
	GeoJSON,
	GeoJSONProps,
	LayerGroup,
	LayersControl,
} from "react-leaflet";

type UserAreasLayerProperties = {getAreaPolygonOnClick: any, setAreaPolygonOnClick: any } & GeoJSONProps;

export default function UserAreasLayer(
	properties: UserAreasLayerProperties,
): JSX.Element {
	const { data, getAreaPolygonOnClick, setAreaPolygonOnClick } = properties;
	const areaPolygonOnClick = getAreaPolygonOnClick();

	const layer = (
		<GeoJSON
			data={data}
			eventHandlers={{
				click: (e) => {
					setAreaPolygonOnClick((prevState: any) => {
						const same = prevState === e.propagatedFrom.feature;
						return same ? null : e.propagatedFrom.feature;
					});
				},
			}}
			style={(feature) => {
				return {
					color: areaPolygonOnClick === feature ? "red" : "blue",
					weight: 0.5,
					fillOpacity: areaPolygonOnClick === feature ? 0.4 : 0.25,
				};
			}}
		/>
	);

	return (
		<LayersControl.Overlay checked name="Áreas do usuário">
			<LayerGroup>{layer}</LayerGroup>
		</LayersControl.Overlay>
	);
}
