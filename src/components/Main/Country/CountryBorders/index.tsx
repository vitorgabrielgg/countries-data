import { useCountriesStore } from "@/store";
import { Link } from "react-router-dom";

interface CountryBordersProps {
  borders?: string[];
}

export const CountryBorders = ({ borders }: CountryBordersProps) => {
  const { initialCountries } = useCountriesStore();

  const countryBorders = initialCountries.filter(
    (country) => borders && borders.includes(country.cca3)
  );

  return (
    <div className="pb-10 lg:pt-10">
      <ul className="flex flex-wrap gap-4 w-full">
        <h3 className="font-bold text-lg max-lg:w-full">Border Countries:</h3>
        {countryBorders.map(({ name }, index) => (
          <Link to={`/country/${name.common}`} key={index}>
            <li className="shadow-md w-full sm:max-w-32 text-center bg-white rounded py-[6px] px-4 font-medium text-sm">
              {name.common}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
