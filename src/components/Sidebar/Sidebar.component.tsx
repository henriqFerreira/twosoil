"use client";

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
import SidebarItem from "./components/SidebarItem/SidebarItem.component";
import { useState } from "react";

export default function Sidebar(): JSX.Element {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	return (
		<aside className={styles.sidebar} data-collapsed={collapsed}>
			<nav className={styles.navigation}>
				<button onClick={() => setCollapsed(!collapsed)}>trocar</button>
				<SidebarItem
					label="Talhões"
					icon="water"
					href={"/"}
					collapsed={collapsed}
				/>
				<SidebarItem
					label="Clima"
					icon="umbrella"
					href={"/weather"}
					collapsed={collapsed}
				/>
				{/* <Link
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
				</Link> */}
			</nav>
		</aside>
	);
}
