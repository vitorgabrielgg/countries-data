import { listFormatter, numberFormatter } from "@/utils";

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
      key: "Native Name",
      value: Object.values(name.nativeName)[
        Object.values(name.nativeName).length - 1
      ].common,
    },
    {
      key: "Population",
      value: population && numberFormatter.format(population),
    },
    {
      key: "Region",
      value: region,
    },
    {
      key: "Sub Region",
      value: subregion,
    },
    {
      key: "Capital",
      value: capital && listFormatter.format(capital),
    },
  ];

  const infoCountry2 = [
    {
      key: "Top Level Domain",
      value: tld,
    },
    {
      key: "Currencies",
      value:
        currencies &&
        Object.values(currencies).map((currency) => currency?.name),
    },
    {
      key: "Languages",
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
        {infoCountry1.map(({ key, value }, index) => (
          <li
            key={index}
            className="font-light leading-relaxed dark:text-white transition-colors"
          >
            <span className="font-bold">{key}: </span>
            {value}
          </li>
        ))}
      </ul>

      <ul className="space-y-2 lg:w-2/4 pb-6">
        {infoCountry2.map(({ key, value }, index) => (
          <li
            key={index}
            className="font-light leading-relaxed dark:text-white transition-colors"
          >
            <span className="font-bold">{key}: </span>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
