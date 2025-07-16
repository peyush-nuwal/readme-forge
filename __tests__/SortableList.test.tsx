import React from "react";
import {  screen } from "@testing-library/react";
import { renderWithTheme } from "../utils/test-utils";
import { SortableDragContainer } from "@/components/dashboard/SortableList";
const mockSetItems = jest.fn();

const initialItems = [
  { id: "item-1", name: "Item 1" },
  { id: "item-2", name: "Item 2" },
  { id: "item-3", name: "Item 3" },
];

const getId = (item: { id: string }) => item.id;

describe("SortableDragContainer", () => {
  it("renders all items", () => {
    renderWithTheme(
      <SortableDragContainer
        items={initialItems}
        setItems={mockSetItems}
        getId={getId}
      >
        {(item) => <div>{item.name}</div>}
      </SortableDragContainer>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });
});
