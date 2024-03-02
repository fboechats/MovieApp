import { useMovie } from "hooks/useMovies";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";

export const SingleMovie = () => {
  const { movieId } = useParams();
  const movie = useMovie(movieId);

  return (
    <section className="flex h-auto w-full flex-col gap-5 py-8 text-center sm:min-h-screen">
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 sm:flex-row">
        <img
          loading="lazy"
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt="movie poster"
        />
        <div className="flex w-[452px] flex-col items-center gap-4">
          <h2 className="text-3xl text-yellow-400">{movie.original_title}</h2>
          <div className="flex gap-x-20">
            <p className="text-[#ffe400]">{movie.release_date}</p>
            <p className="flex items-center text-[#ffe400]">
              <span>{movie.vote_average}</span>
              <CiStar className="ml-[5px]" />
            </p>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};
