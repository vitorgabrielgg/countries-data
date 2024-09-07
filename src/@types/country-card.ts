export type CountryCard = {
  name: {
    common: string;
  };
  population: number;
  capital?: string;
  region: string;
  flags: {
    svg: string;
    alt: string;
  };
};
