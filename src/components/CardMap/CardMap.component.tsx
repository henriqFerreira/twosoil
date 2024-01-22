import styles from "./CardMap.module.scss";

export function CardMap({ isCollapsed }: any) {
	return (
		<>
			{isCollapsed && (
				<div className={styles.container}>
					<div>
						<h2 className={styles.titleHeader}>Detalhes da área</h2>
						<hr className={styles.hr} />
					</div>
					<div className={styles.contentBody}>
						<p className={styles.titleBody}>Id da área</p>
						<p className={styles.paragraphBody}>1</p>
					</div>
					<div className={styles.contentBody}>
						<p className={styles.titleBody}>Nome da área</p>
						<p className={styles.paragraphBody}>Área 1</p>
					</div>
					<div className={styles.contentBody}>
						<p className={styles.titleBody}>Tipo da plantio</p>
						<p className={styles.paragraphBody}>Milho</p>
					</div>
					{/* <hr className={styles.hr}/> */}
					<div
						className={`${styles.contentBody} ${styles.coordsContentBody}`}
					>
						<p className={styles.titleBody}>Lat e Lng</p>
						<p className={styles.paragraphBody}>
							[Lat: -26.131047 Lon: -53.393545], [Lat: -26.130996
							Lon: -53.393405], [Lat: -26.130651 Lon: -53.392766],
							[Lat: -26.130495 Lon: -53.39255], [Lat: -26.130174
							Lon: -53.392343], [Lat: -26.129808 Lon: -53.392352],
							[Lat: -26.129667 Lon: -53.39249], [Lat: -26.129515
							Lon: -53.392838], [Lat: -26.129361 Lon: -53.392976],
							[Lat: -26.1292 Lon: -53.39309], [Lat: -26.129297
							Lon: -53.393389], [Lat: -26.129569 Lon: -53.393738],
							[Lat: -26.129777 Lon: -53.39359], [Lat: -26.13018
							Lon: -53.393646], [Lat: -26.130361 Lon: -53.393735],
							[Lat: -26.130407 Lon: -53.393689], [Lat: -26.130592
							Lon: -53.393589], [Lat: -26.130853 Lon: -53.393779],
							[Lat: -26.131047 Lon: -53.393545]
						</p>
					</div>
				</div>
			)}
		</>
	);
}
