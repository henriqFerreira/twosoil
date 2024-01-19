import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./AreaItem.module.scss";

type AreaItemProperties = {
	name: string;
	cropType: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function AreaItem(properties: AreaItemProperties) {
	const { name, cropType } = properties;

	return (
		<div role="listitem" className={styles.item}>
			<p>{name}</p>
			<p>{cropType}</p>
		</div>
	);
}
