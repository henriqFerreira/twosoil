import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./InnerSidebar.module.scss";

type InnerSidebarProperties = {
	children?: React.ReactNode;
	header: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function InnerSidebar(props: InnerSidebarProperties) {
	const { children, header, ...rest } = props;
	return (
		<aside className={styles.innerSidebar} {...rest}>
			<header className={styles.innerHeader}>{header}</header>
			<hr />
			{children}
		</aside>
	);
}
