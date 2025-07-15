import AddElements from "@/components/dashboard/AddElements";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";

describe("AddElement  Component", () => {
  it("renders add elements container with expected text", () => {
    renderWithTheme(<AddElements />);
      const addElementContainer = screen.getByTestId("add-elements-container");
      
   expect(addElementContainer).toBeInTheDocument();
   expect(addElementContainer).toHaveTextContent(
     "Click on a section below to add it to Readme."
   );
  });
    
    it("renders input field with placeholder", () => { 
        renderWithTheme(<AddElements />);
        const inputField = screen.getByTestId("Input");
        
        expect(inputField).toBeInTheDocument();
        expect(inputField).toHaveAttribute("placeholder", "Search for a seaction");

        fireEvent.change(inputField, { target: { value: "test" } });
        expect(inputField).toHaveValue("test");
    })

    it("renders ElementLibrary component", () => {
      renderWithTheme(<AddElements />);
      const elementLibrary = screen.getByTestId("Element-library-container");
      
      expect(elementLibrary).toBeInTheDocument();
    })
    
});
