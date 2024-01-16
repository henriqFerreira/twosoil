import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";
import styles from "./SidebarItem.module.scss";
import { IconType } from "react-icons";
import { FaCircleNotch, FaUmbrella, FaWater } from "react-icons/fa";
import { usePathname } from "next/navigation";

type SidebarItemProperties = {
	label: string;
	icon?: string;
	collapsed?: boolean;
} & LinkProps &
	HTMLProps<HTMLAnchorElement>;

export default function SidebarItem(properties: SidebarItemProperties) {
	const { label, icon, collapsed, href } = properties;

	const pathname: string = usePathname();

	let Icon: IconType | undefined = undefined;

	const iconsMapping = (): { [key: string]: IconType } => {
		return {
			default: FaCircleNotch,
			umbrella: FaUmbrella,
			water: FaWater,
		};
	};

	const iconExists = icon !== undefined;

	if (iconExists) Icon = iconsMapping()[icon];

	return (
		<Link
			aria-label={label}
			href={href}
			className={styles.item}
			data-collapsed={collapsed}
			data-active={pathname === href}
		>
			<span className={styles.icon}>{Icon && <Icon />}</span>
			{!collapsed && label}
		</Link>
	);
}
