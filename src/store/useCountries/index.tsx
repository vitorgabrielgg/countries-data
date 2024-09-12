import { CountryCard } from "@/@types";
import { create } from "zustand";

interface CountriesState {
  initialCountries: CountryCard[];
  currentCountries: CountryCard[];
  setInitialCountries: (countries: CountryCard[]) => void;
}

export const useCountriesStore = create<CountriesState>((set) => {
  return {
    initialCountries: [],
    currentCountries: [],
    setInitialCountries: (countries) =>
      set(() => ({ initialCountries: countries, currentCountries: countries })),
  };
});
