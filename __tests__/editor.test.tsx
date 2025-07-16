jest.mock("prismjs");
import Editor from "@/components/dashboard/Editor";
import { renderWithTheme } from "../utils/test-utils";
import { screen } from "@testing-library/react";
import useElementStore from "@/store/useElementStore";

jest.mock("@/store/useElementStore");

const mockedStore = useElementStore as jest.MockedFunction<
  typeof useElementStore
>;

describe("content editor render", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders editor container", () => {
    // Minimal setup so it doesn’t crash
    mockedStore.mockImplementation((selector) =>
      selector({
        selectedElements: [],
        selectedId: null,
        setSelected: jest.fn(),
        updateSelectedElement: jest.fn(),
        addElement: jest.fn(),
        removeElement: jest.fn(),
        clearElements: jest.fn(),
        setElements: jest.fn(),
        createElement: jest.fn(),
        getSelectedElement: jest.fn(),
      })
    );

    renderWithTheme(<Editor />);
    const editorContainer = screen.getByTestId("dashboard-editor");
    expect(editorContainer).toBeInTheDocument();
    expect(screen.getByText("Editor")).toBeInTheDocument();
  });

  it("renders editor with selected content", () => {
    mockedStore.mockImplementation((selector) =>
      selector({
        selectedElements: [
          { id: "1", title: "Test", content: "# Hello Markdown" },
        ],
        selectedId: "1",
        setSelected: jest.fn(),
        updateSelectedElement: jest.fn(),
        addElement: jest.fn(),
        removeElement: jest.fn(),
        clearElements: jest.fn(),
        setElements: jest.fn(),
        createElement: jest.fn(),
        getSelectedElement: jest.fn(),
      })
    );

    renderWithTheme(<Editor />);
    expect(screen.getByDisplayValue("# Hello Markdown")).toBeInTheDocument();
  });
});
