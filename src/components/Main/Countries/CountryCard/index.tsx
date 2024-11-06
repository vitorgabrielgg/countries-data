import { CountryProps } from "@/@types";
import { listFormatter, numberFormatter } from "@/utils";
import { Link } from "react-router-dom";

export const CountryCardItem = ({
  capital,
  flags,
  name,
  population,
  region,
}: CountryProps) => {
  return (
    <Link
      to={`/country/${name.common}`}
      className="max-w-[350px] sm:max-w-full w-full shadow-md rounded overflow-hidden max-h-[350px] flex flex-col"
    >
      <div className="flex-1 max-h-[180px]">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="object-cover w-full h-full flex-1"
        />
      </div>

      <div className="px-7 h-[170px] flex flex-col justify-center dark:bg-dark_color_elements text-light_color_text dark:text-white transition-colors">
        <h3 className="font-extrabold text-xl md:text-[1.4rem]">
          {name.common}
        </h3>
        <div className="mt-3 md:text-lg space-y-[2px]">
          <p className="font-light">
            <span className="font-semibold">Population: </span>
            {numberFormatter.format(population)}
          </p>
          <p className="font-light">
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          {capital && (
            <div className="flex gap-1">
              <span className="font-semibold">Capital:</span>
              <p className="truncate font-light">
                {listFormatter.format(capital)}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
