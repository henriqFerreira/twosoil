import Head from "next/head";
import Map from "../components/Map/Map.component";
import dynamic from "next/dynamic";

export default function IndexPage() {
	const MapWithNoSSR = dynamic(
		() => import("../components/Map/Map.component"),
		{
			ssr: false,
		},
	);

	return (
		<>
			<h1>TwoSoil</h1>
			<MapWithNoSSR />
		</>
	);
}
