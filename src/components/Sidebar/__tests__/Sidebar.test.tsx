import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar.component";
import { useState } from "react";

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: jest.fn(),
}));

describe("Sidebar: default sidebar layout for all pages", () => {
	beforeEach(() => {
		(useState as jest.Mock).mockImplementation(
			jest.requireActual("react").useState,
		);
	});

	it("SVG logo should have collapsed className if sidebar collapsed state is set to true", () => {
		(useState as jest.Mock).mockImplementation(() => [true, jest.fn()]);

		render(<Sidebar />);

		const svgLogo: HTMLElement = screen.getByRole("img");

		expect(svgLogo.classList.contains("collapsed")).toBeTruthy();
	});

	it("SVG logo should have expanded className if sidebar collapsed state is set to false", () => {
		(useState as jest.Mock).mockImplementation(() => [false, jest.fn()]);

		render(<Sidebar />);

		const svgLogo: HTMLElement = screen.getByRole("img");

		expect(svgLogo.classList.contains("expanded")).toBeTruthy();
	});
});
