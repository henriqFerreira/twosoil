"use client";

import dynamic from "next/dynamic";
import Page from "../components/Page/Page.component";
import InnerSidebar from "../components/InnerSidebar/InnerSidebar.component";
import AreaItem from "../components/AreaItem/AreaItem.component";
import useSession from "../context/useSession.hook";
import { useState } from "react";

export default function IndexPage() {
	const MapWithNoSSR = dynamic(
		() => import("../components/Map/Map.component"),
		{ ssr: false },
	);

	const [showDefaultPolygons, setShowDefaultPolygons] =
		useState<boolean>(false);

	const { session } = useSession();
	const { isLoading, userPolygons } = session;

	return (
		<Page>
			<InnerSidebar header="Talhões">
				{isLoading.userPolygons && (
					<p style={{ color: "white" }}>Loading...</p>
				)}

				{!isLoading.userPolygons && userPolygons.length <= 0 && (
					<button
						onClick={(e) => {
							e.preventDefault();
							setShowDefaultPolygons((prevState) => !prevState);
						}}
					>
						{!showDefaultPolygons
							? "Selecionar áreas no mapa"
							: "Cancelar"}
					</button>
				)}

				{!isLoading.userPolygons &&
					userPolygons.length >= 0 &&
					userPolygons.map((feature) => {
						const properties = feature.properties!;

						return (
							<AreaItem
								key={properties.area_id}
								name={properties.area_name}
								cropType={properties.crop_name}
							/>
						);
					})}
			</InnerSidebar>
			<MapWithNoSSR showDefaultPolygons={showDefaultPolygons} />
		</Page>
	);
}
