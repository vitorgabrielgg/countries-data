import { CountryCard } from "@/@types";
import { listFormatter, numberFormatter } from "@/utils";
import { Link } from "react-router-dom";

export const CountryCardItem = ({
  capital,
  flags,
  name,
  population,
  region,
}: CountryCard) => {
  return (
    <Link
      to={`/country/${name.common}`}
      className="max-w-[350px] sm:max-w-full w-full shadow-md rounded overflow-hidden max-h-[380px] flex flex-col"
    >
      <div className="flex-1 max-h-[180px]">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="object-cover w-full h-full flex-1"
        />
      </div>

      <div className="px-7 h-[170px] flex flex-col justify-center">
        <h3 className="font-extrabold text-xl md:text-[1.4rem] text-light_color_text">
          {name.common}
        </h3>
        <div className="mt-3 md:text-lg space-y-[2px]">
          <p className="text-light_color_text font-light">
            <span className="font-semibold">Population: </span>
            {numberFormatter.format(population)}
          </p>
          <p className="text-light_color_text font-light">
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          {capital && (
            <div className="flex gap-1 text-light_color_text">
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
