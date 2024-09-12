import { CountryProps } from "@/@types";
import { Container, Country } from "@/components";
import { getCountryByName } from "@/services";
import { AiOutlineLoading } from "react-icons/ai";

import { useEffect, useState } from "react";
import { useQueryFetch } from "@/hooks";
import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const { name } = useParams();

  const [dataCountry, isLoadingCountry] = useQueryFetch(
    getCountryByName,
    "country",
    name
  );

  const [country, setCountry] = useState<CountryProps>();

  useEffect(() => {
    if (typeof dataCountry !== "boolean" && !Array.isArray(dataCountry)) {
      setCountry(dataCountry);
    }
  }, [dataCountry]);

  if (isLoadingCountry) {
    return (
      <div className="mt-52">
        <AiOutlineLoading className="animate-spin w-10 h-10 mx-auto" />
      </div>
    );
  }

  return (
    <Container className="px-5">
      <Country country={country} />
    </Container>
  );
};
