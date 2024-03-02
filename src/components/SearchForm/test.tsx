import { fireEvent } from "@testing-library/react";
import { renderWithRouter } from "testing/renderWithRouter";
import { SearchForm } from "./index";

describe("SearchForm component", () => {
  test("calls onSearch when form is submitted", () => {
    const onSearchMock = vi.fn();
    const onClearMock = vi.fn();

    const { getByLabelText, getByRole } = renderWithRouter(
      <SearchForm
        placeholder="Search for movies"
        onSearch={onSearchMock}
        onClear={onClearMock}
        defaultValue=""
      />,
    );

    const input = getByLabelText("Search for movies");
    const form = getByRole("search");

    fireEvent.change(input, { target: { value: "Harry Potter" } });
    fireEvent.submit(form);

    expect(onSearchMock).toHaveBeenCalledWith("Harry Potter");
  });

  test("calls onClear when input value is cleared", () => {
    const onSearchMock = vi.fn();
    const onClearMock = vi.fn();

    const { getByLabelText } = renderWithRouter(
      <SearchForm
        placeholder="Search for movies"
        onSearch={onSearchMock}
        onClear={onClearMock}
        defaultValue="Batman"
      />,
    );

    const input = getByLabelText("Search for movies");

    fireEvent.change(input, { target: { value: "" } });

    expect(onClearMock).toHaveBeenCalled();
  });
});
