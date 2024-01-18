import { DetailedHTMLProps, HTMLAttributes, HTMLProps } from "react";
import styles from "./InnerSidebar.module.scss";

type InnerSidebarProperties = {
	children: React.ReactNode;
	header: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function InnerSidebar(props: InnerSidebarProperties) {
	const { children, header, ...rest } = props;

	return (
		<aside className={styles.innerSidebar} {...rest}>
			<header>{header}</header>
			{children}
		</aside>
	);
}
