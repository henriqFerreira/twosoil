import Link from "next/link";
import styles from "./Sidebar.module.scss";
import {
	FaBoxes,
	FaChartLine,
	FaCalendarAlt,
	FaAngleRight,
	FaMapSigns,
	FaMapMarkerAlt,
	FaUmbrella,
	FaDatabase,
	FaCloudUploadAlt,
} from "react-icons/fa";

export default function Sidebar(): JSX.Element {
	return (
		<aside className={styles.container}>
			<div className={styles.itemsLink}>
				<Link href="/" className={styles.link}>
					<FaBoxes />
					<p>Meus talhões</p>
					<div className={styles.iconArrow}>
						<FaAngleRight />
					</div>
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.linkSecondary}`}
				>
					<FaCalendarAlt />
					<p>Safra XXXX</p>
					<div className={styles.iconArrow}>
						<FaAngleRight />
					</div>
				</Link>
				<hr className="line"></hr>
				<Link href="/" className={styles.link}>
					<FaChartLine />
					<p>Talhões</p>
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.linkSecondary}`}
				>
					<FaMapSigns />
					<p>Rotação de culturas</p>
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.linkSecondary}`}
				>
					<FaMapMarkerAlt />
					<p>Anotações</p>
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.linkSecondary}`}
				>
					<FaUmbrella />
					<p>Clima</p>
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.linkSecondary}`}
				>
					<FaDatabase />
					<p>Dados do campo</p>
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.linkSecondary}`}
				>
					<FaCloudUploadAlt />
					<p>Importar arquivos</p>
				</Link>
			</div>
		</aside>
	);
}
