import { CountryProps } from "@/@types";
import { Container, Country } from "@/components";
import { getCountryByName } from "@/services";

import { useEffect, useState } from "react";
import { useQueryFetch } from "@/hooks";
import { useParams } from "react-router-dom";
import { Loading } from "@/components/Loading";

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
        <Loading />
      </div>
    );
  }

  return (
    <Container className="px-5">
      <Country country={country} />
    </Container>
  );
};
