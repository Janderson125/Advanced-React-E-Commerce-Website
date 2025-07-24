import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => axios.get("https://fakestoreapi.com/products/categories").then(res => res.data),
  });
};
