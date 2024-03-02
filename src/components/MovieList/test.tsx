import { renderWithRouter } from "testing/renderWithRouter";
import { MovieList } from "./index";

const mockMovies = [
  {
    id: 1,
    original_title: "Movie 1",
    poster_path: "/image",
    release_date: "01/01/98",
    vote_average: "5555",
    overview: "Description",
  },
  {
    id: 2,
    original_title: "Movie 2",
    poster_path: "/image",
    release_date: "01/01/98",
    vote_average: "5555",
    overview: "Description",
  },
];

vi.mock("hooks/useMovies", () => ({
  useMovies: vi.fn(() => mockMovies),
}));

describe("MovieList component", () => {
  test("renders MovieList with title and SearchForm", () => {
    const { getByText, getByRole } = renderWithRouter(
      <MovieList
        type="popular"
        title="Popular Movies"
        emoji={<span>🔥</span>}
      />,
    );

    expect(getByText("Popular Movies")).toBeInTheDocument();
    expect(getByRole("search")).toBeInTheDocument();
  });

  test("renders movie cards when movies are available", () => {
    const { getByText } = renderWithRouter(
      <MovieList
        type="popular"
        title="Popular Movies"
        emoji={<span>🔥</span>}
      />,
    );

    expect(getByText("Movie 1")).toBeInTheDocument();
    expect(getByText("Movie 2")).toBeInTheDocument();
  });
});
