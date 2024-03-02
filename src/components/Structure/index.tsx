import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";

export type Theme = "dark" | "light";

export const Structure = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen scroll-smooth bg-white text-black dark:bg-black dark:text-white">
      <div className="font-montserrat transition-colors duration-300 ease-in-out">
        <NavBar setTheme={setTheme} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
