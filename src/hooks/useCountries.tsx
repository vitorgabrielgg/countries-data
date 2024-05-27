import { CountriesContext } from "@/context/countries";
import { CountriesActionTypes } from "@/context/countries/action-types";

import { useContext } from "react";

export const useCountries = () => {
  const { state, dispatch } = useContext(CountriesContext);

  const { continent, bordersCountry, country, nameInput, countries } = state;

  const borderCountry = () => {
    dispatch({ type: CountriesActionTypes.GET_BORDERS_COUNTRIES, payload: {} });
  };

  const getCountry = (country: string) => {
    dispatch({ type: CountriesActionTypes.GET_COUNTRY, payload: { country } });
    borderCountry();
  };

  const getCountriesByContinent = (continent: string) => {
    dispatch({
      type: CountriesActionTypes.GET_COUNTRIES_BY_CONTINENT,
      payload: { continent },
    });
  };

  const getCountriesByName = (name: string) => {
    dispatch({
      type: CountriesActionTypes.GET_COUNTRIES_BY_NAME,
      payload: { name },
    });
  };

  return {
    countries,
    country,
    continent,
    bordersCountry,
    nameInput,
    getCountry,
    getCountriesByContinent,
    getCountriesByName,
  };
};
