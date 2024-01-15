import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar.component";

describe("Sidebar", () => {
	it("should render correctly", () => {
		render(<Sidebar />);

		const sidebar = screen.getByRole("complementary");

		expect(sidebar).not.toBeNull();
	});
});
