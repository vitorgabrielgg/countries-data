import { useCountriesStore } from "@/store";
import { useCallback } from "react";

export const useFilterCountries = () => {
  const { continent, initialCountries, setCurrentCountries } =
    useCountriesStore();

  const filterByContinent = useCallback(() => {
    if (continent === "All") {
      setCurrentCountries(initialCountries);
    } else {
      setCurrentCountries(
        initialCountries.filter((country) => country.region === continent)
      );
    }
  }, [continent, initialCountries, setCurrentCountries]);

  return {
    filterByContinent,
  };
};
