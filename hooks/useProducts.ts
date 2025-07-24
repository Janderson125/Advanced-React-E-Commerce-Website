import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = (category?: string) => {
  const endpoint = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`;

  return useQuery({
    queryKey: ["products", category],
    queryFn: () => axios.get(endpoint).then(res => res.data),
  });
};
