import { ReactNode, createContext, useReducer } from "react";
import { getCountries } from "../../actions/getCountries";
import { CountryProps } from "@/types/country";
import { CountriesActionTypes } from "./action-types";

type ActionProps = {
  type: string;
  payload: {
    [key: string]: string;
  };
};

type StateProps = {
  countries: CountryProps[];
  country: CountryProps | null;
  bordersCountry: CountryProps[];
  continent: string;
  nameInput: string;
};

type ContextProps = {
  state: StateProps;
  dispatch: React.Dispatch<ActionProps>;
};

const countriesInitial: CountryProps[] = await getCountries();

const initialState: StateProps = {
  countries: countriesInitial,
  country: null,
  bordersCountry: [],
  continent: "",
  nameInput: "",
};

export const CountriesContext = createContext<ContextProps>({
  state: {
    countries: countriesInitial,
    country: null,
    bordersCountry: [],
    continent: "",
    nameInput: "",
  },
  dispatch: () => [],
});

const countriesReducer = (state: StateProps, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case CountriesActionTypes.GET_COUNTRY:
      return {
        ...state,
        country: state.countries.filter(
          (country) => country.name.common === payload.country
        )[0],
      };
    case CountriesActionTypes.GET_BORDERS_COUNTRIES:
      return {
        ...state,
        bordersCountry: state.countries.filter(
          (c) =>
            state.country?.borders && state.country.borders.includes(c.cca3)
        ),
      };
    case CountriesActionTypes.GET_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        countries:
          payload.continent === "All"
            ? initialState.countries
            : initialState.countries.filter(
                (country) => country.region === payload.continent
              ),
        continent: payload.continent,
      };
    default:
      return state;
  }
};

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(countriesReducer, initialState);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};
