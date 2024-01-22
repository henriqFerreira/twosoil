import type { Metadata } from "next";
import SideBar from "../components/Sidebar/Sidebar.component";
import styles from "../styles/layouts/rootLayout.module.scss";
import "../styles/global.scss";
import SessionContextProvider from "../context/SessionContext.context";

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
				<SessionContextProvider>
					<SideBar />
					{children}
				</SessionContextProvider>
			</body>
		</html>
	);
}
