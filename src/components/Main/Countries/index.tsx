import { CountryCard } from "@/@types";
import { useQueryFetch } from "@/hooks";
import { getAllCountries } from "@/services";

import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { CountryCardItem } from "./CountryCard";

export const Countries = () => {
  const [dataCountries, isLoadingCountries] = useQueryFetch(
    getAllCountries,
    "countries"
  );

  const [countries, setCountries] = useState<CountryCard[]>();

  useEffect(() => {
    if (typeof dataCountries !== "boolean") setCountries(dataCountries);
  }, [dataCountries]);

  if (isLoadingCountries) {
    return (
      <div className="mt-5">
        <AiOutlineLoading className="animate-spin w-10 h-10 mx-auto" />
      </div>
    );
  }

  if (!countries?.length) {
    return (
      <div className="text-center mt-5 text-light_color_text">
        <p>Nenhum país encontrado, pesquise novamente.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-auto_fit xl:grid-cols-4 justify-items-center gap-10 pt-5 pb-20">
      {countries.map((country, i) => (
        <CountryCardItem key={i} {...country} />
      ))}
    </section>
  );
};
