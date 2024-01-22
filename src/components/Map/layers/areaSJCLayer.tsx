import { useEffect, useState } from "react";
import { GeoJSON, LayersControl, LayerGroup } from "react-leaflet";

import { NewAreaType } from "../types/NewAreaType";

let variavelGlobal: boolean = false;

export const AreasSJCLayer = ({
	data,
	setGeoFilter,
	getGeoFilter,
	checked,
	getAreaPolygonGlobal,
}: any) => {
	const geoFilter = getGeoFilter();

	const [valuesFromServer, setValuesFromServer] = useState<any>(); //tipar corretamente com GeoJsonOptions
	const areaPolygonGlobal = getAreaPolygonGlobal();

	let novaArea: NewAreaType = {
		type: "Feature",
		properties: {},
		geometry: {
			coordinates: areaPolygonGlobal.map(({ latlngs }: any) =>
				latlngs.map((c: any) => [c.lng, c.lat]),
			),
			type: "Polygon",
		},
	};

	if (novaArea.geometry.coordinates.length !== 0) {
		variavelGlobal = true;
	}

	async function getValuesFromServer() {
		try {
			const response = await fetch(
				"http://localhost:5000/get-map-polygons",
				{
					method: "GET",
				},
			);
			if (!response.ok) {
				throw new Error(`Erro na solicitação: ${response.statusText}`);
			}

			const data = await response.json();
			setValuesFromServer(data.data);
		} catch (error) {
			console.error("Error:", error);
		}
	}

	async function addValuesFromServer() {
		try {
			if (novaArea.geometry.coordinates.length === 0) return;
			const response = await fetch(
				"http://localhost:5000/add-new-polygon",
				{
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						type: novaArea.type,
						properties: novaArea.properties,
						geometry: novaArea.geometry,
						coordinates: novaArea.geometry.coordinates,
					}),
				},
			);
			if (!response.ok) {
				throw new Error(`Erro na solicitação: ${response.statusText}`);
			}

			const data = await response.json();
			setValuesFromServer(data.data);
			variavelGlobal = false;
			alert("Área salva com sucesso!");
			window.location.reload(); //melhorar esse reload aqui PMDS?????
		} catch (error) {
			console.error("Error:", error);
		}
	}

	useEffect(() => {
		addValuesFromServer();
		getValuesFromServer();
	}, [variavelGlobal]);

	const layer = valuesFromServer && (
		<>
			<GeoJSON
				key="geo-json-areas-SJC"
				data={valuesFromServer}
				eventHandlers={{
					click: (e) => {
						setGeoFilter((prevState: any) => {
							const same = prevState === e.propagatedFrom.feature;
							return same ? null : e.propagatedFrom.feature;
						});
					},
				}}
				style={(feature) => {
					return {
						color: geoFilter === feature ? "red" : "blue",
						weight: 0.5,
						fillOpacity: geoFilter === feature ? 0.4 : 0.25,
					};
				}}
			></GeoJSON>
		</>
	);
	return (
		<LayersControl.Overlay name="Areas SJC" checked={checked}>
			<LayerGroup>{layer}</LayerGroup>
		</LayersControl.Overlay>
	);
};
