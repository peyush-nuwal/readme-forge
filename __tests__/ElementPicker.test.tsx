import ElementPicker from "@/components/dashboard/ElementPicker";
import {  screen, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";



describe("ElementPicker Component", () => {
  it("renders the header and reset button", () => {
    renderWithTheme(<ElementPicker />);

    expect(screen.getByText("Sections")).toBeInTheDocument();
    expect(
      screen.getByText("Click on a section below to edit the content.")
    ).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Reset"));

  // const items = screen.getAllByTestId("selected-element-item");
  // expect(items.length).toBe(1);

  expect(screen.getByTestId("add-elements-container")).toBeInTheDocument();
  expect(screen.getByTestId("selected-element-container")).toBeInTheDocument();

  });
});
