import { render } from "@testing-library/react";
import AreaItem from "../AreaItem.component";

describe("AreaItem: list item from the inner sidebar of the map page", () => {
	it("should render", () => {
		const areaName = "Talhão 1";
		const cropType = "Rice";

		render(<AreaItem name={areaName} cropType={cropType} />);
	});
});
