/**
 * @jest-environment jsdom
 */

jest.mock("@uiw/react-markdown-preview", () => ({
  __esModule: true,
  default: ({ source }: { source: string }) => (
    <div data-testid="markdown-preview">{source}</div>
  ),
}));

import { fireEvent, screen, within } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";
import Preview from "@/components/dashboard/Preview";
import useElementStore from "@/store/useElementStore";

jest.mock("@/store/useElementStore");

const mockedStore = useElementStore as jest.MockedFunction<
  typeof useElementStore
>;

const mockZustandState = (elements: ReadmeElement[]) => {
  mockedStore.mockImplementation((selector) =>
    selector({
      selectedElements: elements,
      selectedId: elements[0]?.id ?? null,
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
};

describe("Preview component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Preview heading", () => {
    mockZustandState([{ id: "1", title: "Intro", content: "# Hello" }]);
    renderWithTheme(<Preview />);
    expect(screen.getByText("Preview")).toBeInTheDocument();
  });

 
    
});
