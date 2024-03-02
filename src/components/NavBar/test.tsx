import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRouter } from "testing/renderWithRouter";
import { NavBar } from "./index";

describe("NavBar component", () => {
  test("renders NavBar with all links", () => {
    const { getByText } = renderWithRouter(<NavBar setTheme={() => ({})} />);

    expect(getByText("Movie Maniac")).toBeInTheDocument();
    expect(getByText("Popular")).toBeInTheDocument();
    expect(getByText("Top Rated")).toBeInTheDocument();
    expect(getByText("Upcoming")).toBeInTheDocument();
  });

  test("calls setTheme when dark mode button is clicked", () => {
    const setThemeMock = vi.fn();
    const { getByRole } = render(
      <BrowserRouter>
        <NavBar setTheme={setThemeMock} />
      </BrowserRouter>,
    );

    const darkModeButton = getByRole("button");

    fireEvent.click(darkModeButton);

    expect(setThemeMock).toHaveBeenCalledTimes(1);
  });
});
