import Container from "@/components/Container";
import InputSearch from "@/components/InputSearch";

export default function FilterAndSection() {
  return (
    <Container className="px-5 py-6 flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
      <InputSearch />
    </Container>
  );
}
