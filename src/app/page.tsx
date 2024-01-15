import SideBar from "./components/SideBar";
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
			<SideBar />
			<MapWithNoSSR />
		</>
	);
}