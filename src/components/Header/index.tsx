import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Container } from "../Container";
import { useTheme } from "@/hooks";

export const Header = () => {
  const { handleTheme, setTheme } = useTheme();

  return (
    <header className="shadow-md shadow-black/[.07] dark:bg-dark_color_elements transition-colors">
      <Container className="flex items-center justify-between py-7 px-5 lg:py-5">
        <span className="text-lg font-extrabold lg:text-xl dark:text-white transition-colors">
          Countries Data
        </span>
        <button
          className="flex items-center gap-2"
          onClick={() => setTheme(handleTheme() ? "dark" : "light")}
        >
          {handleTheme() ? (
            <IoMoonOutline />
          ) : (
            <IoMoonSharp className="text-white" />
          )}
          <p className="font-semibold text-sm lg:text-base dark:text-white transition-colors">
            Dark Mode
          </p>
        </button>
      </Container>
    </header>
  );
};
