import { Container, Countries, FilterSection } from "@/components";

export const Home = () => {
  return (
    <Container className="px-5">
      <FilterSection />
      <Countries />
    </Container>
  );
};
