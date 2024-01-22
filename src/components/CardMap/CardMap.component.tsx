import styles from "./CardMap.module.scss";

type CardMapProperties = {
	isCollapsed: boolean;
	data: GeoJSON.Feature<GeoJSON.Polygon> | null;
};

export function CardMap(props: CardMapProperties) {
	const { isCollapsed, data } = props;

	const properties = data && data.properties!;

	return (
		<aside
			className={`${styles.container} ${isCollapsed && styles.collapsed}`}
		>
			{data && properties && (
				<>
					
					<h1>{properties.area_name}</h1>
					<p>Id: {properties.area_id}</p>
					<hr />
					<section className={styles.details}>
						<h2>Tipo de plantio</h2>
						<p>{properties.crop_name}</p>
					</section>
					<section className={styles.metadata}>
						<h4>Latitude e Longitude</h4>
						<small>{data.geometry.coordinates.toString()}</small>
					</section>
				</>
			)}
		</aside>
	);
}
