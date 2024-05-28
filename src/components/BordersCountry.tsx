import { CountryProps } from "@/types/country";
import { Link } from "react-router-dom";

type BordersProps = {
  borders: CountryProps[];
};

export default function BordersCountry({ borders }: BordersProps) {
  return (
    <div className={`pb-10 ${borders.length <= 0 && "hidden"}`}>
      <h3 className="font-bold text-[1.2rem] dark:text-white transition-colors">
        Border Countries:
      </h3>
      <ul className="grid grid-cols-3 sm:grid-cols-borders mt-4 gap-4 w-full">
        {borders.map(({ name }, index) => (
          <Link to={`/country/${name.common}`} key={index}>
            <li className="shadow-md w-full sm:max-w-28 text-center bg-white rounded py-[6px] font-medium text-sm dark:bg-dark_blue dark:text-white transition-colors">
              {name.common}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
