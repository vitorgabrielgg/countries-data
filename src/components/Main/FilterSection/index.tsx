import { InputFilter } from "./InputFilter";

export const FilterSection = () => {
  return (
    <section className="py-6 md:py-12 flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
      <InputFilter />
    </section>
  );
};
