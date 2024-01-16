import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import SideBar from "../components/Sidebar/Sidebar.component";
import styles from "../styles/layouts/rootLayout.module.scss";
import "../styles/global.scss";

export const metadata: Metadata = {
	title: "TwoSoil",
	description: "Front-end upper-jr challenge",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={styles.rootLayout}>
				<SideBar />
				{children}
			</body>
		</html>
	);
}
