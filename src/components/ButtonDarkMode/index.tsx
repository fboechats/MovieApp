import { Theme } from "components/Structure";
import { Dispatch, SetStateAction, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type ButtonDarkModeProps = {
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ButtonDarkMode = ({ setTheme }: ButtonDarkModeProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={handleClick} type="button">
      {active ? <FaSun /> : <FaMoon />}
    </button>
  );
};
