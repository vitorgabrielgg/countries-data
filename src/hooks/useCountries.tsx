import { CountriesContext } from "@/context/countries";
import { useContext } from "react";

export const useCountries = () => {
  const { state, dispatch } = useContext(CountriesContext);

  return {
    state,
  };
};
