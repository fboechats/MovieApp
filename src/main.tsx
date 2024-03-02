import { MovieList } from "components/MovieList";
import { SingleMovie } from "components/SingleMovie";
import { Structure } from "components/Structure";
import { createRoot } from "react-dom/client";
import { CiStar } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Structure />,
    children: [
      {
        path: "/",
        element: (
          <MovieList
            type="popular"
            title="Popular"
            emoji={
              <FaFireAlt className="ml-[7px] size-[25px] text-[#ffe400]" />
            }
          />
        ),
      },
      {
        path: "/top_rated",
        element: (
          <MovieList
            type="top_rated"
            title="Top Rated"
            emoji={<CiStar className="ml-[7px] size-[25px] text-[#ffe400]" />}
          />
        ),
      },
      {
        path: "/upcoming",
        element: (
          <MovieList
            type="upcoming"
            title="Upcoming"
            emoji={
              <LuPartyPopper className="ml-[7px] size-[25px] text-[#ffe400]" />
            }
          />
        ),
      },
      {
        path: "/movie/:movieId",
        element: <SingleMovie />,
      },
    ],
  },
]);

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
