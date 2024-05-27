import { CountriesContext } from "@/context/countries";
import { CountriesActionTypes } from "@/context/countries/action-types";

import { useContext } from "react";

export const useCountries = () => {
  const { state, dispatch } = useContext(CountriesContext);

  const borderCountry = () => {
    dispatch({ type: CountriesActionTypes.GET_BORDERS_COUNTRIES, payload: {} });
  };

  const getCountry = (country: string) => {
    dispatch({ type: CountriesActionTypes.GET_COUNTRY, payload: { country } });
    borderCountry();
  };

  return {
    state,
    getCountry,
  };
};
