export const getCountries = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const json = await res.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};
