import { useFilterCountries, useQueryFetch } from "@/hooks";
import { getAllCountries } from "@/services";

import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { CountryCardItem } from "./CountryCard";
import { useCountriesStore } from "@/store";

export const Countries = () => {
  const [dataCountries, isLoadingCountries] = useQueryFetch(
    getAllCountries,
    "countries"
  );

  const { continent, currentCountries, setInitialCountries } =
    useCountriesStore();
  const { filterByContinent } = useFilterCountries();

  useEffect(() => {
    if (typeof dataCountries !== "boolean" && Array.isArray(dataCountries)) {
      setInitialCountries(dataCountries);
    }

    if (continent !== "") {
      return filterByContinent();
    }
  }, [continent, dataCountries, setInitialCountries, filterByContinent]);

  if (isLoadingCountries) {
    return (
      <div className="mt-5">
        <AiOutlineLoading className="animate-spin w-10 h-10 mx-auto" />
      </div>
    );
  }

  if (!currentCountries?.length) {
    return (
      <div className="text-center mt-5 text-light_color_text">
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
