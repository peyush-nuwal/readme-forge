import ElementLibrary from "@/components/dashboard/ElementLibrary";
import { fireEvent,  screen } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";





describe("Editor Component", () => {
  it("renders the element library container", () => {
    renderWithTheme(<ElementLibrary value={""} />);
    const addElementContainer = screen.getByTestId("Element-library-container");
    expect(addElementContainer).toBeInTheDocument();
  });
  it("renders the custom section button", () => {
    renderWithTheme(<ElementLibrary value={""} />);
    const customSectionButton = screen.getByText("Custom Section");
    expect(customSectionButton).toBeInTheDocument();
    fireEvent.click(customSectionButton);
    const customSectionForm = screen.getByTestId("custom-section-form");
    expect(customSectionForm).toBeInTheDocument();
  });
});