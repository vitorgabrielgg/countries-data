import { CountryProps } from "@/@types";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useCountriesStore } from "@/store";
import { useEffect } from "react";
import { useQueryFetch } from "@/hooks";
import { getAllCountries } from "@/services";

import { Button } from "@/components/ui/button";
import { InfoCountry } from "./InfoCountry";
import { CountryBorders } from "./CountryBorders";

interface CountryComponentProps {
  country: CountryProps | undefined;
}

export const Country = ({ country }: CountryComponentProps) => {
  const [dataCountries] = useQueryFetch(getAllCountries, "countries");

  const { setInitialCountries, initialCountries } = useCountriesStore();

  useEffect(() => {
    if (!initialCountries.length) {
      if (typeof dataCountries !== "boolean" && Array.isArray(dataCountries)) {
        setInitialCountries(dataCountries);
      }
    }
  }, [dataCountries, initialCountries, setInitialCountries]);

  return (
    <>
      {country && (
        <section>
          <Link to="/">
            <Button className="px-7 space-x-2 rounded mt-12 bg-white shadow-around text-light_color_text dark:bg-dark_color_elements dark:text-white transition-colors">
              <FaArrowLeftLong className="font-extrabold" />
              <span className="font-semibold">Back</span>
            </Button>
          </Link>

          <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-32">
            <div className="h-auto sm:w-3/4 lg:w-[45%] shadow">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="h-full lg:h-auto w-full object-cover max-h-[400px]"
              />
            </div>
            <div className="pt-10 lg:pt-0 space-y-6 lg:w-[55%]">
              <h2 className="text-3xl font-extrabold dark:text-white transition-colors">
                {country.name.common}
              </h2>

              <InfoCountry {...country} />

              {country.borders && <CountryBorders borders={country.borders} />}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
