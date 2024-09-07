export type CountryProps = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  borders?: string[];
  cca3: string;
  population: number;
  capital?: string;
  region: string;
  subregion?: string;
  tld?: string;
  languages?: {
    [key: string]: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
};
