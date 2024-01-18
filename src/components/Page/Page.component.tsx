"use client";

import {
	DetailedHTMLProps,
	HTMLAttributes,
	RefObject,
	useEffect,
	useRef,
	useState,
} from "react";
import styles from "./Page.module.scss";

type PageProperties = {
	children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Page(props: PageProperties) {
	const { children } = props;

	const [childElementCount, setChildElementCount] = useState<number>(2);

	const pageRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);

	useEffect(() => {
		if (pageRef.current) {
			const childElementsCount: number = pageRef.current.children.length;
			setChildElementCount(childElementsCount);
		}

		return () => {};
	}, [childElementCount]);

	return (
		<main
			ref={pageRef}
			className={styles.page}
			data-children={childElementCount}
		>
			{children}
		</main>
	);
}
