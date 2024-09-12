import { CountryProps } from "@/@types";
import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { InfoCountry } from "./InfoCountry";

interface CountryComponentProps {
  country: CountryProps | undefined;
}

export const Country = ({ country }: CountryComponentProps) => {
  return (
    <>
      {country && (
        <section>
          <Link to="/">
            <Button className="px-7 space-x-2 rounded mt-12 bg-white shadow-around text-light_color_text">
              <FaArrowLeftLong className="font-extrabold" />
              <span className="font-semibold">Back</span>
            </Button>
          </Link>

          <div className="mt-16 flex flex-col lg:flex-row lg:gap-10 lg:items-start xl:gap-20">
            <div className="h-auto sm:w-3/4 lg:w-[45%] shadow">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="h-full lg:h-auto w-full object-cover max-h-[400px]"
              />
            </div>
            <div className="pt-10 lg:pt-0 space-y-6 lg:w-[55%]">
              <h2 className="text-2xl font-extrabold">{country.name.common}</h2>

              <InfoCountry {...country} />

              {/* <BordersCountry /> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
