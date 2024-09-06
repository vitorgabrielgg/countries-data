import { InputFilter } from "./InputFilter";
import { SelectFilter } from "./SelectFilter";

export const FilterSection = () => {
  return (
    <section className="py-6 md:py-12 flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
      <InputFilter />
      <SelectFilter />
    </section>
  );
};
