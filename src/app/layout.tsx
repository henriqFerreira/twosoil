import type { Metadata } from "next";
import "../styles/globals.scss";

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
			<body>{children}</body>
		</html>
	);
}
