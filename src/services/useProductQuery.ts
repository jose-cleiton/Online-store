import axios from "axios";
import { useQuery } from "react-query";
import { IQueriedRepositories } from "../interfaces/interfaces";
import { research } from '../interfaces/interfaces';


export const useProductQuery = () => {
  const URL =`https://api.mercadolibre.com/sites/MLB/search?q=${research()}`;
  const { data } = useQuery<IQueriedRepositories[]>('products', 
  async () => {
    const response = await axios.get(URL);
    return response.data.results;
  });

  return data;
}
