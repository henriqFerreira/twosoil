import dynamic from "next/dynamic";

export default function IndexPage() {
	const MapWithNoSSR = dynamic(
		() => import("../components/Map/Map.component"),
		{ ssr: false },
	);

	return (
		<main>
			<MapWithNoSSR />
		</main>
	);
}
