import { renderWithRouter } from "testing/renderWithRouter";
import { SingleMovie } from "./index";

const movie = {
  original_title: "Movie Title",
  release_date: "2023-01-01",
  vote_average: 7.5,
  overview: "Movie overview",
  poster_path: "poster.jpg",
};

vi.mock("hooks/useMovies", () => ({
  useMovie: vi.fn(() => movie),
}));

describe("SingleMovie component", () => {
  test("renders SingleMovie component with movie details", () => {
    const { getByText, getByAltText } = renderWithRouter(<SingleMovie />);

    expect(getByText(movie.original_title)).toBeInTheDocument();
    expect(getByText(movie.release_date)).toBeInTheDocument();
    expect(getByText(movie.vote_average)).toBeInTheDocument();
    expect(getByText(movie.overview)).toBeInTheDocument();
    expect(getByAltText("movie poster")).toBeInTheDocument();
  });
});
