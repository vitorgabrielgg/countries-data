import { useCountries } from "@/hooks/useCountries";
import {
  Select as SelectContainer,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { IoIosArrowDown } from "react-icons/io";

const arrContinent = [
  {
    value: "Africa",
    option: "Africa",
  },
  {
    value: "Americas",
    option: "America",
  },
  {
    value: "Asia",
    option: "Asia",
  },
  {
    value: "Europe",
    option: "Europe",
  },
  {
    value: "Oceania",
    option: "Oceania",
  },
  {
    value: "All",
    option: "All",
  },
];

export default function Select() {
  const { getCountriesByContinent, continent } = useCountries();

  return (
    <div className="relative w-[220px] shadow-around rounded">
      <SelectContainer
        value={continent && continent}
        onValueChange={(value) => getCountriesByContinent(value)}
      >
        <SelectTrigger className="w-full outline-none rounded py-7 text-left pl-6 text-very_dark_blue text-sm font-semibold border-none h-14 bg-white dark:bg-dark_blue dark:text-white transition-colors">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent className="border-none shadow-around rounded bg-white dark:bg-dark_blue transition-colors">
          <SelectGroup className="">
            {arrContinent.map((continent, index) => (
              <SelectItem
                key={index}
                className="cursor-pointer dark:text-white transition-colors"
                value={continent.value}
              >
                {continent.option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectContainer>
      <IoIosArrowDown className="absolute top-2/4 -translate-y-2/4 right-3 dark:text-white transition-colors" />
    </div>
  );
}
