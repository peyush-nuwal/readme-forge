// jest.setup.ts
import "@testing-library/jest-dom";


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false, // or true based on what you want to simulate
    media: query,
    onchange: null,
    addListener: jest.fn(), // for old-style matchMedia
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});
