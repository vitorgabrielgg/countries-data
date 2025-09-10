export const getAllCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,borders,cca3,population,capital,region,subregion,tld,languages"
  );
  const json = await res.json();
  return json;
};
