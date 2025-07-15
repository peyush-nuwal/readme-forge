import React from "react";
import {  screen, fireEvent } from "@testing-library/react";
import {  useTheme } from "@/components/ThemeProvider"; 
import "@testing-library/jest-dom";
import { renderWithTheme } from "../utils/test-utils";

// Sample component that consumes the context
const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="theme-value">{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Helper to wrap with provider


describe("ThemeContext", () => {
  it("has default theme and toggles correctly", () => {
    renderWithTheme(<ThemeToggler />);

    const themeText = screen.getByTestId("theme-value");
    const button = screen.getByRole("button", { name: /toggle theme/i });

    // Initially light
    expect(themeText).toHaveTextContent("light");

    // Toggle to dark
    fireEvent.click(button);
    expect(themeText).toHaveTextContent("dark");

    // Toggle back to light
    fireEvent.click(button);
    expect(themeText).toHaveTextContent("light");
  });

  it("adds dark class to <html> when theme is dark", () => {
    renderWithTheme(<ThemeToggler />);

    const button = screen.getByRole("button", { name: /toggle theme/i });

    // Toggle to dark
    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);

    // Toggle back to light
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
