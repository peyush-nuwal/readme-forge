import { fireEvent,  screen } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";
import CustomSectionForm from "@/components/dashboard/CustomSectionForm";


describe("CustomSectionForm", () => { 
     it("renders the custom section form when open is true", () => {
        const closeMock = jest.fn();
        renderWithTheme(<CustomSectionForm open={true} close={closeMock} />);
        
        const formElement = screen.getByTestId("custom-section-form");
        expect(formElement).toBeInTheDocument();
        
        const titleElement = screen.getByText("Add Custom section");
         expect(titleElement).toBeInTheDocument();
         
    
         const inputElement = screen.getByTestId("Input");
         expect(inputElement).toBeInTheDocument();
         fireEvent.change(inputElement, { target: { value: "Header" } });
              fireEvent.click(screen.getByText("Add"));
     })
 })