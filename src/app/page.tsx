"use client";

import dynamic from "next/dynamic";
import Page from "../components/Page/Page.component";
import InnerSidebar from "../components/InnerSidebar/InnerSidebar.component";
import AreaItem from "../components/AreaItem/AreaItem.component";
import useSession from "../context/useSession.hook";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/pages/root.module.scss";
import { CardMap } from "../components/CardMap/CardMap.component";

export default function IndexPage() {
	const MapWithNoSSR = dynamic(
		() => import("../components/Map/Map.component"),
		{ ssr: false },
	);

	const mapRef = useRef(null);

	const [showDefaultPolygons, setShowDefaultPolygons] =
		useState<boolean>(false);

	const [selectedPolygon, setSelectedPolygon] =
		useState<GeoJSON.Feature<GeoJSON.Polygon> | null>(null);

	const { session } = useSession();
	const { isLoading, userPolygons } = session;

	useEffect(() => {
		console.log(selectedPolygon);
	}, [selectedPolygon]);

	return (
		<Page>
			<InnerSidebar header="Talhões">
				{isLoading.userPolygons && (
					<p style={{ color: "white" }}>Loading...</p>
				)}

				<ul className={styles.areas}>
					{!isLoading.userPolygons &&
						userPolygons.length >= 0 &&
						userPolygons.map((feature) => {
							const properties = feature.properties!;

							return (
								<AreaItem
									key={properties.area_id}
									name={properties.area_name}
									cropType={properties.crop_name}
									setter={setSelectedPolygon}
									mapRef={mapRef}
									feature={
										feature as GeoJSON.Feature<GeoJSON.Polygon>
									}
								/>
							);
						})}
				</ul>

				{!isLoading.userPolygons && (
					<ul className={styles.buttons}>
						<button
							onClick={(e) => {
								setShowDefaultPolygons(
									(prevState) => !prevState,
								);
							}}
						>
							{!showDefaultPolygons
								? "Selecionar áreas no mapa"
								: "Cancelar"}
						</button>
					</ul>
				)}
			</InnerSidebar>
			<MapWithNoSSR
				forwardRef={mapRef}
				defaultPolygons={{
					get: () => "",
					set: setShowDefaultPolygons,
					checked: showDefaultPolygons,
				}}
				userMappedPolygons={{
					get: () => selectedPolygon,
					set: setSelectedPolygon,
				}}
			/>
			<CardMap isCollapsed={!selectedPolygon} data={selectedPolygon} />
		</Page>
	);
}
