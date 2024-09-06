import {
  Select as SelectContainer,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

const arrContinent = [
  {
    value: "Africa",
    option: "Africa",
  },
  {
    value: "Americas",
    option: "America",
  },
  {
    value: "Asia",
    option: "Asia",
  },
  {
    value: "Europe",
    option: "Europe",
  },
  {
    value: "Oceania",
    option: "Oceania",
  },
  {
    value: "All",
    option: "All",
  },
];

export const SelectFilter = () => {
  return (
    <div className="relative w-[220px] shadow-around rounded">
      <SelectContainer>
        <SelectTrigger className="w-full rounded py-7 text-left pl-6 text-light_color_text text-sm font-semibold border-none h-14 bg-white">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent className="border-none shadow-around rounded bg-white">
          <SelectGroup className="">
            {arrContinent.map((continent, index) => (
              <SelectItem
                key={index}
                className="cursor-pointer"
                value={continent.value}
              >
                {continent.option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectContainer>
    </div>
  );
};
