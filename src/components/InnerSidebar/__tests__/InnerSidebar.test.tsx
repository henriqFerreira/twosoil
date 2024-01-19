import { render } from "@testing-library/react";
import InnerSidebar from "../InnerSidebar.component";

describe("InnerSidebar: sidebar specific for every page", () => {
	it("should render", () => {
		const header = "header";

		render(<InnerSidebar header={header}></InnerSidebar>);
	});
});
