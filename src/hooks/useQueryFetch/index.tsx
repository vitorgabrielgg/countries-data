import { useQuery } from "@tanstack/react-query";

type QueryMethod<T> = (param?: string) => Promise<T>;

export const useQueryFetch = <T,>(
  method: QueryMethod<T>,
  queryKey: string,
  parameter?: string
) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [queryKey, parameter && parameter],
    queryFn: () => method(parameter && parameter),
  });

  return [data, isLoading, isError];
};
