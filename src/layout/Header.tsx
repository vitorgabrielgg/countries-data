import Container from "@/components/Container";
import { useTheme } from "@/hooks/useTheme";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="shadow-md shadow-black/[.07] dark:bg-dark_blue transition-colors">
      <Container className="flex items-center justify-between py-7 px-5 lg:py-5">
        <span className="text-lg font-extrabold lg:text-xl dark:text-white transition-colors">
          Countries Data
        </span>
        <button
          className="flex items-center gap-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <IoMoonSharp className="text-white transition-colors" />
          ) : (
            <IoMoonOutline />
          )}
          <p className="font-semibold text-sm lg:text-base dark:text-white transition-colors">
            Dark Mode
          </p>
        </button>
      </Container>
    </header>
  );
}
