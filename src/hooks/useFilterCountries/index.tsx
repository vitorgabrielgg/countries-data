import { useCountriesStore } from "@/store";
import { useCallback } from "react";

export const useFilterCountries = () => {
  const { continent, countryName, initialCountries, setCurrentCountries } =
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

  const filterByCountryName = useCallback(() => {
    if (countryName === "") {
      setCurrentCountries(initialCountries);
    } else {
      setCurrentCountries(
        initialCountries.filter((country) =>
          country.name.common.toLowerCase().includes(countryName.toLowerCase())
        )
      );
    }
  }, [countryName, initialCountries, setCurrentCountries]);

  return {
    filterByContinent,
    filterByCountryName,
  };
};
