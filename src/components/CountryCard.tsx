import { CountryProps } from "@/types/country";
import { listFormatter, numberFormatter } from "@/utils";
import { Link } from "react-router-dom";

export default function CountryCard({
  capital,
  flags,
  name,
  population,
  region,
}: CountryProps) {
  return (
    <Link
      to={`/country/${name.common}`}
      className="max-w-[350px] sm:max-w-full w-full shadow-md rounded overflow-hidden max-h-[380px] flex flex-col dark:bg-dark_blue transition-colors"
    >
      <div className="h-2/4">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="object-cover w-full h-full flex-1"
        />
      </div>

      <div className="py-7 px-7 flex-1 dark:text-white transition-colors">
        <h3 className="font-extrabold text-xl md:text-[1.3rem]">
          {name.common}
        </h3>
        <div className="mt-3 md:text-lg space-y-[2px]">
          <p className="">
            <span className="font-bold">Population: </span>
            {numberFormatter.format(population)}
          </p>
          <p className="">
            <span className="font-bold">Region: </span> {region}
          </p>
          {capital && (
            <p className="">
              <span className="font-bold">Capital: </span>{" "}
              {listFormatter.format(capital)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
