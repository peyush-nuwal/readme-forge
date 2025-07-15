import {  screen } from "@testing-library/react";
import Nav from "@/components/Nav";

import { usePathname } from "next/navigation";
import { renderWithTheme } from "../utils/test-utils";

// Mock next/navigation usePathname
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));





describe("Nav Component", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders navigation links", () => {
    renderWithTheme(<Nav />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders external GitHub link", () => {
    renderWithTheme(<Nav />);
    const githubLink = screen.getByRole("link", { name: /github/i });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/peyush-nuwal/readme-forge"
    );
    expect(githubLink).toHaveAttribute("target", "_blank"); // Only if you're using target="_blank"
  });

  it("renders the logo", () => {
    renderWithTheme(<Nav />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

 
});
