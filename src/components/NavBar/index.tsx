import { Dispatch, SetStateAction } from "react";
import { CiStar } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { ButtonDarkMode } from "../ButtonDarkMode";
import { Theme } from "../Structure";

type NavBarProps = {
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const NavBar = ({ setTheme }: NavBarProps) => {
  return (
    <nav className="flex min-h-[80px] w-full flex-col items-center gap-1 border-b-[1px] border-solid border-[#e6e6e6] px-[30px] pb-4 text-center md:flex-row md:justify-between">
      <h1 className="text-[30px] font-[700] text-black dark:text-[#ffe400]">
        Movie Maniac
      </h1>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <ButtonDarkMode setTheme={setTheme} />
        <NavLink
          className="flex items-center px-[15px] py-0 text-[20px] font-[500] text-black no-underline dark:text-[#fff]"
          to="/"
        >
          Popular
          <FaFireAlt className="ml-[7px] size-[25px] text-[#ffe400]" />
        </NavLink>
        <NavLink
          className="flex items-center px-[15px] py-0 text-[20px] font-[500] text-black no-underline dark:text-[#fff]"
          to="/top_rated"
        >
          Top Rated
          <CiStar className="ml-[7px] size-[25px] text-[#ffe400]" />
        </NavLink>
        <NavLink
          className="flex items-center px-[15px] py-0 text-[20px] font-[500] text-black no-underline dark:text-[#fff]"
          to="/upcoming"
        >
          Upcoming
          <LuPartyPopper className="ml-[7px] size-[25px] text-[#ffe400]" />
        </NavLink>
      </div>
    </nav>
  );
};
