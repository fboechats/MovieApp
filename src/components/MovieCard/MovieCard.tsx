import { Movie } from "hooks/useMovies";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="relative m-[15px] h-[300px] w-[200px] overflow-hidden rounded-[10px] text-[#fff] shadow-md transition-all duration-300 ease-in-out hover:scale-110"
      rel="noreferrer"
    >
      <img
        loading="lazy"
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        alt="movie poster"
      />
      <div className="absolute top-0 flex size-full flex-col justify-end from-black p-[10px] opacity-0 transition-all duration-200 ease-in-out hover:opacity-100">
        <h3 className="text-[16px] text-[#ffe400]">{movie.original_title}</h3>
        <div className="mx-0 my-[5px] flex items-center justify-between text-[12px] text-[#ffe400] text-[500]">
          <p>{movie.release_date}</p>
          <p className="flex items-center">
            {movie.vote_average}
            <CiStar className="ml-[5px] size-[20px]" />
          </p>
        </div>
        <p className="text-[12px] italic">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </Link>
  );
};
