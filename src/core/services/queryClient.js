import { QueryCache, QueryClient } from "@tanstack/react-query";
import { ErrorService } from "./index";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      ErrorService.handleResponse(error);
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      throwOnError: () => true,
      // enabled: false,
    },
    mutations: {
      onError: (error) => {
        console.error("error: ", error);
      },
    },
  },
});
