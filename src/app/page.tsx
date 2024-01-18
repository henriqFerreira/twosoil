import dynamic from "next/dynamic";
import Page from "../components/Page/Page.component";
import InnerSidebar from "../components/InnerSidebar/InnerSidebar.component";

export default function IndexPage() {
	const MapWithNoSSR = dynamic(
		() => import("../components/Map/Map.component"),
		{ ssr: false },
	);

	return (
		<Page>
			<InnerSidebar header="Map">
				<p>Teste</p>
			</InnerSidebar>
			<MapWithNoSSR />
		</Page>
	);
}
