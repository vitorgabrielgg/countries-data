import Container from "@/components/Container";
import CountryCard from "@/components/CountryCard";
import EmptyCountries from "@/components/EmptyCountries";
import { useCountries } from "@/hooks/useCountries";

export default function Countries() {
  const { countries } = useCountries();
  return (
    <section className="">
      {countries.length > 0 ? (
        <Container className="grid grid-cols-auto_fit xl:grid-cols-4 justify-items-center px-5 gap-10 pb-20">
          {countries.map(
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
      ) : (
        <EmptyCountries />
      )}
    </section>
  );
}
