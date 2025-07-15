
import { predefinedElements } from '@/lib/data'
import { create } from 'zustand'



type ElementStoreProps = {
  selectedElements: ReadmeElement[];
  selectedId: string | null;
  addElement: (element: ReadmeElement) => void;
  removeElement: (id: string) => void;
  clearElements: () => void;
  setElements: (elements: ReadmeElement[]) => void;
  createElement: (title: string) => void;
  setSelected: (id: string) => void;
  getSelectedElement: () => ReadmeElement | undefined;
  updateSelectedElement:(data: Partial<ReadmeElement>)=>void
};

const useElementStore = create<ElementStoreProps>((set, get) => ({
  selectedElements: [
    {
      ...predefinedElements[0],
      id: crypto.randomUUID(),
      originalId: predefinedElements[0].id,
    },
  ],
  selectedId: predefinedElements[0].id,

  addElement: (element) => {
    const newId = crypto.randomUUID();
    const newElement = {
      ...element,
      id: newId,
      originalId: element.id,
    };

    set((state) => ({
      selectedElements: [...state.selectedElements, newElement],
    }));

     
  },

  removeElement: (id) => {
    set((state) => ({
      selectedElements: state.selectedElements.filter(
        (el) => el.id !== id && el.originalId !== id
      ),
    }));
  },

  clearElements: () => {
    const id = crypto.randomUUID();
    const defaultElement = {
      ...predefinedElements[0],
      id,
      originalId: predefinedElements[0].id,
    };
    set(() => ({
      selectedElements: [defaultElement],
      selectedId: id, // <-- select it
    }));
  },
  setElements: (items: ReadmeElement[]) => set({ selectedElements: items }),
  createElement: (title) => {
    const newId = crypto.randomUUID();
    set((state) => ({
      selectedElements: [
        ...state.selectedElements,
        { id: newId, title, content: "" },
      ],
      selectedId: newId, // <-- auto-select new element
    }));
  },
  setSelected: (id) => set({ selectedId: id }),
  getSelectedElement: () =>
    get().selectedElements.find((el) => el.id === get().selectedId),
  updateSelectedElement: (data) => {
    const { selectedId, selectedElements } = get();
    if (!selectedId) return;
    const updatedElements = selectedElements.map((el) =>
      el.id === selectedId ? { ...el, ...data } : el
    );
    set({ selectedElements: updatedElements });
  },
}));


export default useElementStore;