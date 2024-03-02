import { useMovies } from "hooks/useMovies";
import { ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchForm } from "../SearchForm";

type MovieListProps = {
  type: string;
  title: string;
  emoji: ReactElement;
};

export const MovieList = ({ type, title, emoji }: MovieListProps) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("query") ?? "";
  const [searchText, setSearchText] = useState(searchParam);
  const movies = useMovies({ type: type, searchText: searchText });

  return (
    <section className="h-auto" id={type}>
      <header className="mb-[5px] flex flex-col items-center justify-between px-[30px] py-[10px] md:flex-row">
        <h2 className="flex items-center text-[26px] font-[700] text-black dark:text-[#ffe400]">
          {title} {emoji}
        </h2>
        <SearchForm
          defaultValue={searchParam}
          onSearch={setSearchText}
          onClear={() => setSearchText("")}
          placeholder="Search for a movie"
        />
      </header>
      <div className="flex flex-wrap justify-evenly">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
