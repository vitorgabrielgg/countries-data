export const getCountryByName = async (name?: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const json = await res.json();
  return json[0];
};
