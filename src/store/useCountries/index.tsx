import { CountryProps } from "@/@types";
import { create } from "zustand";

interface CountriesState {
  initialCountries: CountryProps[];
  currentCountries: CountryProps[];
  setInitialCountries: (countries: CountryProps[]) => void;
}

export const useCountriesStore = create<CountriesState>((set) => {
  return {
    initialCountries: [],
    currentCountries: [],
    setInitialCountries: (countries) =>
      set(() => ({ initialCountries: countries, currentCountries: countries })),
  };
});
