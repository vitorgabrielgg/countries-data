import BordersCountry from "@/components/BordersCountry";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useCountries } from "@/hooks/useCountries";
import { listFormatter, numberFormatter } from "@/utils";
import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

export default function Country() {
  const { name } = useParams();
  const { country, getCountry } = useCountries();

  useEffect(() => {
    if (name) {
      getCountry(name);
    }
  }, [name]);

  const infoCountry1 = [
    {
      key: "Native Name",
      value:
        country &&
        Object.values(country?.name.nativeName)[
          Object.values(country?.name.nativeName).length - 1
        ].common,
    },
    {
      key: "Population",
      value: country?.population && numberFormatter.format(country?.population),
    },
    {
      key: "Region",
      value: country?.region,
    },
    {
      key: "Sub Region",
      value: country?.subregion,
    },
    {
      key: "Capital",
      value: country?.capital && listFormatter.format(country.capital),
    },
  ];

  const infoCountry2 = [
    {
      key: "Top Level Domain",
      value: country?.tld,
    },
    {
      key: "Currencies",
      value:
        country?.currencies &&
        Object.values(country.currencies).map((currency) => currency?.name),
    },
    {
      key: "Languages",
      value:
        country?.languages &&
        listFormatter.format(
          Object.values(country.languages).map((language) => language)
        ),
    },
  ];

  return (
    <>
      {country && (
        <section>
          <Container className="px-5">
            <Link to="/">
              <Button
                variant="default"
                size="sm"
                className="px-7 space-x-2 rounded mt-12 bg-white dark:bg-dark_blue outline-none shadow-around dark:text-white transition-colors"
              >
                <FaArrowLeftLong className="font-extrabold dark:text-white transition-colors" />
                <span className="font-semibold">Back</span>
              </Button>
            </Link>

            <div className="mt-16 flex flex-col lg:flex-row lg:gap-10 lg:items-start xl:gap-20 dark:text-white transition-colors">
              <div className="h-auto sm:w-3/4 lg:w-2/4 shadow">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  className="h-full lg:h-auto w-full object-cover max-h-[400px]"
                />
              </div>
              <div className="pt-10 lg:pt-0 space-y-6 lg:w-2/4">
                <h2 className="text-2xl font-extrabold">
                  {country.name.common}
                </h2>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                  <ul className="space-y-2">
                    {infoCountry1.map(({ key, value }, index) => (
                      <li key={index} className="">
                        <span className="font-bold">{key}: </span>
                        {value}
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-2 pb-10">
                    {infoCountry2.map(({ key, value }, index) => (
                      <li key={index} className="font-light">
                        <span className="font-bold">{key}: </span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>

                <BordersCountry />
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
