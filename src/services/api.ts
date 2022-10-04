import { useEffect, useState } from "react";
import axios from "axios";

type IRepository = {
  id: string;
  name:string;
};
const URL ="https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola" 

export function useRepositories() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
   axios.get(URL)
      .then((response)  =>{
        setRepositories(response.data);
      })
      
      
  }, []);

  return repositories;
}

