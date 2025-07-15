
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Preview", () => {
  it("renders markdown preview text", () => {
    render(<Home />);
    expect(screen.getByText(/Hello dark mode/i)).toBeInTheDocument();
  });
});
