import { useMovies } from "./useMovies";

describe("useMovies hook", () => {
  test("fetches movies without search text", () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        results: [
          { id: 1, title: "Movie 1" },
          { id: 2, title: "Movie 2" },
        ],
      }),
    });

    const result = useMovies({ type: "popular", searchText: "" });

    expect(result).toEqual([
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ]);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/movie/popular?api_key=b206319c653018769a8894d6b1f9b98e",
    );
  });

  test("fetches movies with search text", () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        results: [
          { id: 1, title: "Movie 1" },
          { id: 2, title: "Movie 2" },
        ],
      }),
    });

    const result = useMovies({ type: "", searchText: "action" });

    expect(result).toEqual([
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ]);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/search/movie?query=action&api_key=b206319c653018769a8894d6b1f9b98e",
    );
  });
});
