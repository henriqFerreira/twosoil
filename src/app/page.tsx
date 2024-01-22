"use client";

import dynamic from "next/dynamic";
import Page from "../components/Page/Page.component";
import InnerSidebar from "../components/InnerSidebar/InnerSidebar.component";
import AreaItem from "../components/AreaItem/AreaItem.component";
import { useRef } from "react";

export default function IndexPage() {
	const MapWithNoSSR = dynamic(
		() => import("../components/Map/Map.component"),
		{ ssr: false },
	);

	const globalState = useRef();

	console.log('global:', globalState.current)

	return (
		<Page>
			<InnerSidebar header="Talhões">
				<ul>
					<AreaItem name="Area name" cropType="Crop name" />
				</ul>
			</InnerSidebar>
			<MapWithNoSSR />
		</Page>
	);
}
