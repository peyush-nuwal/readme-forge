import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/ThemeProvider"; // Your custom theme provider

export const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};


