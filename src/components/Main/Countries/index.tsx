import { useFilterCountries, useQueryFetch } from "@/hooks";
import { getAllCountries } from "@/services";

import { useEffect } from "react";
import { CountryCardItem } from "./CountryCard";
import { useCountriesStore } from "@/store";
import { Loading } from "@/components/Loading";

export const Countries = () => {
  const [dataCountries, isLoadingCountries] = useQueryFetch(
    getAllCountries,
    "countries"
  );

  const { continent, countryName, currentCountries, setInitialCountries } =
    useCountriesStore();
  const {
    filterByContinent,
    filterByContinentAndCountryName,
    filterByCountryName,
  } = useFilterCountries();

  useEffect(() => {
    if (typeof dataCountries !== "boolean" && Array.isArray(dataCountries)) {
      setInitialCountries(dataCountries);
    }

    if (continent !== "" && countryName !== "") {
      return filterByContinentAndCountryName();
    }

    if (continent !== "") {
      return filterByContinent();
    }

    if (countryName !== "") {
      return filterByCountryName();
    }
  }, [
    continent,
    countryName,
    dataCountries,
    setInitialCountries,
    filterByContinent,
    filterByContinentAndCountryName,
    filterByCountryName,
  ]);

  if (isLoadingCountries) {
    return <Loading />;
  }

  if (!currentCountries?.length) {
    return (
      <div className="text-center mt-5 text-light_color_text dark:text-white transition-colors">
        <p>Nenhum país encontrado, pesquise novamente.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-auto_fit xl:grid-cols-4 justify-items-center gap-10 pt-5 pb-20">
      {currentCountries.map((country, i) => (
        <CountryCardItem key={i} {...country} />
      ))}
    </section>
  );
};
