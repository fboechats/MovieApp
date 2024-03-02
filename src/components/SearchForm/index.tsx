import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";

type SearchFormProps = {
  placeholder: string;
  onSearch: (movie: string) => void;
  onClear: () => void;
  defaultValue: string;
};

export const SearchForm = ({
  placeholder,
  onSearch,
  onClear,
  defaultValue,
}: SearchFormProps) => (
  <Form
    id="search-form"
    role="search"
    className="relative w-full max-w-[396px] pt-2 text-gray-600"
    onSubmit={(event) => {
      const form = new FormData(event.target as HTMLFormElement);

      const movie = form.get("query");

      if (typeof movie === "string") {
        onSearch(movie);
      }
    }}
  >
    <input
      id="query"
      defaultValue={defaultValue}
      aria-label={placeholder}
      className="h-10 w-full rounded-lg bg-white px-5 pr-16 text-sm focus:outline-none"
      type="search"
      name="query"
      placeholder={placeholder}
      onChange={(event) => {
        if (event.target.value === "") {
          onClear();
        }
      }}
    />
    <button type="submit" className="absolute right-0 top-0 mr-4 mt-5">
      <FaSearch />
    </button>
  </Form>
);
