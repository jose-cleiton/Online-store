import { useQuery } from "react-query"
import API from "./api";


const apiService = new API();


export const useCategory = () => {
  return useQuery('category', () => {
    const response = apiService.getCategories();
    return response;
  });
};
