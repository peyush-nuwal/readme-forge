import { screen, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";
import SelectedElement from "@/components/dashboard/SelectedElement";
import useElementStore from "@/store/useElementStore";
import { predefinedElements } from "@/lib/data";

describe("selectedElement", () => {
  it("renders selected element", () => {
    renderWithTheme(<SelectedElement />);
    const selectedElement = screen.getByTestId("selected-element-container");
    expect(selectedElement).toBeInTheDocument();
  });
  // if data is empty show this text
  it("renders empty state when no elements are selected", () => {
    useElementStore.setState({ selectedElements: [] }); // reset store for test
    renderWithTheme(<SelectedElement />);

    expect(screen.getByText(/No sections added yet/i)).toBeInTheDocument();
  });

  // check if data is getting rendered correctly
  it("renders selected elements with correct titles", () => {
    useElementStore.setState({
      selectedElements: [
        { id: "1", originalId: "a", title: "Intro", content: "" },
        { id: "2", originalId: "b", title: "Usage", content: "" },
      ],
    });

    renderWithTheme(<SelectedElement />);

    expect(screen.getByText("Intro")).toBeInTheDocument();
    expect(screen.getByText("Usage")).toBeInTheDocument();
  });

  // check if clicking on element selects it
  it("selects element on click", () => {
    const setSelected = jest.spyOn(useElementStore.getState(), "setSelected");

    useElementStore.setState({
      selectedElements: [
        { id: "123", originalId: "a", title: "Test", content: "" },
      ],
      selectedId: null,
    });

    renderWithTheme(<SelectedElement />);

    fireEvent.click(screen.getByText("Test"));
    expect(setSelected).toHaveBeenCalledWith("123");
  });

  // check if delete button is working
  it("resets element content when reset icon is clicked", () => {
    const updateSelectedElement = jest.spyOn(
      useElementStore.getState(),
      "updateSelectedElement"
    );

    useElementStore.setState({
      selectedElements: [
        {
          id: "123",
          originalId: "about",
          title: "About",
          content: "Old content",
        },
      ],
      selectedId: "123",
    });

    renderWithTheme(<SelectedElement />);

    const resetIcon = screen.getByTestId("reset-icon");
    fireEvent.click(resetIcon);

    const original = predefinedElements.find((el) => el.id === "about");
    expect(updateSelectedElement).toHaveBeenCalledWith({
      content: original?.content,
    });
  });
});
