import Container from "@/components/Container";
import InputSearch from "@/components/InputSearch";
import Select from "@/components/Select";

export default function FilterAndSearch() {
  return (
    <Container className="px-5 py-6 md:py-10 flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
      <InputSearch />
      <Select />
    </Container>
  );
}
