import Container from "@/components/Container";
import CountryCard from "@/components/CountryCard";
import { useCountries } from "@/hooks/useCountries";

export default function Countries() {
  const { countries } = useCountries();
  return (
    <section className="">
      <Container className="grid grid-cols-auto_fit xl:grid-cols-4 justify-items-center px-5 gap-10 pb-20">
        {countries &&
          countries.map(
            ({ capital, flags, name, population, region, ...props }, index) => (
              <CountryCard
                key={index}
                capital={capital}
                flags={flags}
                name={name}
                population={population}
                region={region}
                {...props}
              />
            )
          )}
      </Container>
    </section>
  );
}
