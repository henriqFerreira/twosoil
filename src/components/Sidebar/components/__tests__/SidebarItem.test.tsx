import { render } from "@testing-library/react";
import SidebarItem from "../SidebarItem/SidebarItem.component";

describe("SidebarItem: a list item from the default sidebar layout", () => {
	it("should render", () => {
		const label = "Talhão";
		const href = "/";

		render(<SidebarItem label={label} href={href} />);
	});
});
