import { Input } from "@/components/ui/input";
import { useCountriesStore } from "@/store";
import { IoMdSearch } from "react-icons/io";

export const InputFilter = () => {
  const { countryName, setCountryName } = useCountriesStore();

  return (
    <div className="relative md:w-2/5 shadow-around rounded-[.2rem]">
      <Input
        className="bg-white border-none h-14 pl-[4.5rem] rounded-[.2rem] text-light_color_input placeholder:text-light_color_input dark:bg-dark_color_elements dark:text-white dark:placeholder:text-white transition-colors"
        placeholder="Search for a country..."
        value={countryName && countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
      <IoMdSearch className="text-light_color_input dark:text-white absolute top-2/4 -translate-y-2/4 text-2xl left-6 transition-colors" />
    </div>
  );
};
