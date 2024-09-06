import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Container } from "../Container";

export const Header = () => {
  return (
    <header className="shadow-md shadow-black/[.07]">
      <Container className="flex items-center justify-between py-7 px-5 lg:py-5">
        <span className="text-lg font-extrabold lg:text-xl">
          Countries Data
        </span>
        <button className="flex items-center gap-2">
          <IoMoonOutline />
          <p className="font-semibold text-sm lg:text-base">Dark Mode</p>
        </button>
      </Container>
    </header>
  );
};
