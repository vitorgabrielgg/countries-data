import { listFormatter, numberFormatter } from "@/utils";
import { InfoItem } from "./InfoItem";

interface InfoCountryProps {
  capital?: string;
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
  name: {
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion?: string;
  tld?: string;
  languages?: {
    [key: string]: string;
  };
}

export const InfoCountry = ({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
}: InfoCountryProps) => {
  const infoCountry1 = [
    {
      label: "Native Name",
      value:
        name.nativeName &&
        Object.values(name.nativeName)[
          Object.values(name.nativeName).length - 1
        ].common,
    },
    {
      label: "Population",
      value: population && numberFormatter.format(population),
    },
    {
      label: "Region",
      value: region,
    },
    {
      label: "Sub Region",
      value: subregion,
    },
    {
      label: "Capital",
      value: capital && listFormatter.format(capital),
    },
  ];

  const infoCountry2 = [
    {
      label: "Top Level Domain",
      value: tld,
    },
    {
      label: "Currencies",
      value:
        currencies &&
        Object.values(currencies).map((currency) => currency?.name),
    },
    {
      label: "Languages",
      value:
        languages &&
        listFormatter.format(
          Object.values(languages).map((language) => language)
        ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
      <ul className="space-y-2 lg:w-2/4">
        {infoCountry1.map((info, index) => (
          <InfoItem key={index} {...info} />
        ))}
      </ul>

      <ul className="space-y-2 lg:w-2/4 pb-6">
        {infoCountry2.map((info, index) => (
          <InfoItem key={index} {...info} />
        ))}
      </ul>
    </div>
  );
};
