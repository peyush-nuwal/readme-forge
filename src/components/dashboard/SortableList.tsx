"use client";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";



import React from 'react'


type Props<T> = {
  items: T[];
  setItems: (items: T[]) => void;
  getId: (item: T) => string;
  children: (item: T) => React.ReactNode;
  
};

export function SortableDragContainer<T>({
  items,
  setItems,
  getId,
  children,
}: Props<T>) {
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (!over || active.id === over.id) return;

        const oldIndex = items.findIndex((item) => getId(item) === active.id);
        const newIndex = items.findIndex((item) => getId(item) === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        setItems(newItems);
      }}
    >
      <SortableContext
        items={items.map(getId)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => (
          <SortableItem key={getId(item)} id={getId(item)} >
            {children(item)}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
}


function SortableItem({
  id,
  children,

}: {
  id: string;
  children: React.ReactNode;
 
}) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      
      className="mb-2 cursor-grab"
    >
      {children}
    </div>
  );
}