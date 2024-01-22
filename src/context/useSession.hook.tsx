import { useContext } from "react";
import { SessionContext, SessionContextType } from "./SessionContext.context";

export default function useSession(): SessionContextType {
	return useContext(SessionContext) as SessionContextType;
}
