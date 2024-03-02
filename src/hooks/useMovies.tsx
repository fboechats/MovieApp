import { useEffect, useState } from "react";

type UseMovieProps = {
  type: string;
  searchText: string;
};

export type Movie = {
  id: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  overview: string;
};

export const useMovies = ({ type, searchText }: UseMovieProps): Movie[] => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response;

      try {
        if (searchText !== "") {
          response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=b206319c653018769a8894d6b1f9b98e`,
          ).then(async (response) => await response.json());

          return setData(response.results);
        }

        response = await fetch(
          `https://api.themoviedb.org/3/movie/${type}?api_key=b206319c653018769a8894d6b1f9b98e`,
        ).then(async (response) => await response.json());

        setData(response.results);
      } catch (error) {
        throw Error();
      }
    };

    fetchData();
  }, [searchText, type]);

  return data;
};

export const useMovie = (movieId?: string): Movie => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (movieId == undefined) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=b206319c653018769a8894d6b1f9b98e&with_cast=true`,
        ).then(async (response) => await response.json());

        setData(response);
      } catch (error) {
        throw Error();
      }
    };

    fetchData();
  }, [movieId]);

  return data;
};
