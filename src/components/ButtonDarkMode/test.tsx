import { fireEvent, render } from "@testing-library/react";
import { ButtonDarkMode } from ".";

describe("ButtonDarkMode component", () => {
  test("toggles theme when clicked", () => {
    const setThemeMock = vi.fn();
    const { getByRole } = render(<ButtonDarkMode setTheme={setThemeMock} />);

    const button = getByRole("button");

    fireEvent.click(button);

    expect(setThemeMock).toHaveBeenCalledTimes(1);
  });
});
