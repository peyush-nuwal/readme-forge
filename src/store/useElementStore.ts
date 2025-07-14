import { predefinedElements } from '@/lib/data'
import { create } from 'zustand'



type ElementStoreProps = {
  selectedElements: ReadmeElement[];
  addElement: (element: ReadmeElement) => void;
  removeElement: (id: string) => void;
  clearElements: () => void;
  setElements: (elements: ReadmeElement[]) => void;
  createElement:(title:string)=>void
};

const useElementStore = create<ElementStoreProps>((set) => ({
  selectedElements: [
    {
      ...predefinedElements[0],
      id: crypto.randomUUID(),
      originalId: predefinedElements[0].id,
    },
  ],
  addElement: (element) => {
    set((state) => ({
      selectedElements: [
        ...state.selectedElements,
        {
          ...element,
          id: crypto.randomUUID(), // for unique key
          originalId: element.id,
        },
      ],
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
    set(() => ({
      selectedElements: [
        {
          ...predefinedElements[0],
          id: crypto.randomUUID(),
          originalId: predefinedElements[0].id,
        },
      ],
    }));
  },

  setElements: (items: ReadmeElement[]) => set({ selectedElements: items }),
  createElement: (title) => {
    set((state) => ({
      selectedElements: [
        ...state.selectedElements,
        { id: crypto.randomUUID(),title,content:`` },
      ],
    }));
  },
}));


export default useElementStore;