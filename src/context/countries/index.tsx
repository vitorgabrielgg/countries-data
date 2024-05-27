import { ReactNode, createContext, useReducer } from "react";
import { getCountries } from "../../actions/getCountries";
import { CountryProps } from "@/types/country";

type ActionProps = {
  type: string;
  payload: {
    [key: string]: string;
  };
};

type StateProps = {
  countries: CountryProps[];
  country: CountryProps | null;
  bordersCountries: CountryProps[];
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
  bordersCountries: [],
  continent: "",
  nameInput: "",
};

export const CountriesContext = createContext<ContextProps>({
  state: {
    countries: countriesInitial,
    country: null,
    bordersCountries: [],
    continent: "",
    nameInput: "",
  },
  dispatch: () => [],
});

const countryReducer = (state: StateProps, action: ActionProps) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};
