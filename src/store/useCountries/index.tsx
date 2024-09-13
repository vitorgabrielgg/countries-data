import { CountryProps } from "@/@types";
import { create } from "zustand";

interface CountriesState {
  initialCountries: CountryProps[];
  currentCountries: CountryProps[];
  continent: string;
  countryName: string;
  setCountryName: (country: string) => void;
  setContinent: (continent: string) => void;
  setCurrentCountries: (countries: CountryProps[]) => void;
  setInitialCountries: (countries: CountryProps[]) => void;
}

export const useCountriesStore = create<CountriesState>((set) => {
  return {
    initialCountries: [],
    currentCountries: [],
    continent: "",
    countryName: "",
    setCountryName: (countryName) => set(() => ({ countryName })),
    setContinent: (continent) => set(() => ({ continent })),
    setCurrentCountries: (countries) =>
      set(() => ({
        currentCountries: countries,
      })),
    setInitialCountries: (countries) =>
      set(() => ({ initialCountries: countries, currentCountries: countries })),
  };
});
