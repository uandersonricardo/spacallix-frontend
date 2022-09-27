import { useQuery } from "@tanstack/react-query";

import api from "../services/api";

const useFetch = (path: string, params = {}, options = {}) => {
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      [path, params],
      async () => {
        const response = await api.get(path, {
          params
        });

        return response.data;
      },
      options
    );

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData
  };
};

export default useFetch;
