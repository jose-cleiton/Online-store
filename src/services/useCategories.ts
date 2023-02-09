import { useQuery } from "react-query";
import MercadoLivreAPI from "./api";


export default function useCategories() {
    return useQuery("category", () => {
    const response = MercadoLivreAPI.getCategories();
    return response;
});
}

