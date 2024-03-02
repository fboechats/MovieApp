import { fireEvent } from "@testing-library/react";
import { renderWithRouter } from "testing/renderWithRouter";
import { Structure } from "./index";

describe("Structure component", () => {
  test("renders Structure component with NavBar and Outlet", () => {
    const { getByText } = renderWithRouter({
      path: "/",
      element: <Structure />,
      children: [
        {
          path: "/",
          element: <div>Outlet Content</div>,
        },
      ],
    });

    expect(getByText("Movie Maniac")).toBeInTheDocument();
    expect(getByText("Outlet Content")).toBeInTheDocument();
  });

  test("applies dark theme if prefers-color-scheme is dark", () => {
    const mockMatchMedia = vi.fn().mockReturnValue({
      matches: true,
    });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: mockMatchMedia,
    });

    renderWithRouter(<Structure />);

    expect(document.querySelector("html")).toHaveClass("dark");
  });

  test("toggles theme when NavBar button is clicked", () => {
    const { getByRole } = renderWithRouter(<Structure />);

    const themeButton = getByRole("button");
    fireEvent.click(themeButton);

    expect(document.querySelector("html")).toHaveClass("dark");

    fireEvent.click(themeButton);

    expect(document.querySelector("html")).not.toHaveClass("dark");
  });
});
