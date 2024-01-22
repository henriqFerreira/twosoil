"use client";

import { createContext, useEffect, useState } from "react";
import getDefaultPolygons from "../service/getDefaultPolygons";
import getMappedPolygons from "../service/getMappedPolygons";

type Session = {
	mappedPolygons: GeoJSON.FeatureCollection;
	userPolygons: GeoJSON.Feature[];
	isLoading: {
		mappedPolygons: boolean;
		userPolygons: boolean;
	};
};

export type SessionContextType = {
	session: Session;
	update: () => void;
};

export const SessionContext = createContext<SessionContextType | null>(null);

type SessionContextProviderProperties = {
	children: React.ReactNode;
};

export default function SessionContextProvider(
	properties: SessionContextProviderProperties,
): JSX.Element {
	const { children } = properties;

	const [session, setSession] = useState<Session>({
		mappedPolygons: {
			type: "FeatureCollection",
			features: [],
		},
		userPolygons: [],
		isLoading: {
			mappedPolygons: true,
			userPolygons: true,
		},
	});

	useEffect(() => {
		const defaultPolygons = async () => {
			const data: GeoJSON.FeatureCollection = await getDefaultPolygons();

			setSession((session) => ({
				...session,
				mappedPolygons: data,
				isLoading: { ...session.isLoading, mappedPolygons: false },
			}));
		};

		const mappedPolygons = async () => {
			const data: GeoJSON.Feature[] = await getMappedPolygons();

			setSession((session) => ({
				...session,
				userPolygons: data,
				isLoading: { ...session.isLoading, userPolygons: false },
			}));
		};

		defaultPolygons();
		mappedPolygons();
	}, []);

	const update = () => {
		console.log("Session: Update action.");
	};

	return (
		<SessionContext.Provider value={{ session, update }}>
			{children}
		</SessionContext.Provider>
	);
}
