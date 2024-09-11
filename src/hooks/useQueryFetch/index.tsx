import { CountryCard, CountryProps } from "@/@types";
import { useQuery } from "@tanstack/react-query";

type QueryMethod = (param?: string) => Promise<CountryCard[] | CountryProps>;

export const useQueryFetch = (
  method: QueryMethod,
  queryKey: string,
  parameter?: string
) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [queryKey, parameter && parameter],
    queryFn: () => method(parameter && parameter),
  });

  return [data, isLoading, isError];
};
