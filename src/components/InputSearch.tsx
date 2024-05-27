import { Input } from "../components/ui/input";
import { IoMdSearch } from "react-icons/io";

export default function InputSearch() {
  return (
    <div className="relative md:w-2/5 shadow-around rounded-[.2rem]">
      <Input
        className="bg-white border-none h-14 pl-[4.5rem] rounded-[.2rem] placeholder:text-dark_gray"
        placeholder="Search for a country..."
      />
      <IoMdSearch className="text-dark_gray absolute top-2/4 -translate-y-2/4 text-2xl left-6" />
    </div>
  );
}
