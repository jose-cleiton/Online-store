
import axios from 'axios';
import { useQuery } from 'react-query';
import { IQueriedRepositories } from '../interfaces/interfaces';
import Products from '../shared/components/product';
import { research } from './initialStates';


     
 

   

const Itens = () => {
      const URL =`https://api.mercadolibre.com/sites/MLB/search?q=${research()}`;

        const { data } = useQuery<IQueriedRepositories>('products', 
        async () =>
        {
            const response = await axios.get(URL)
          
            return response.data
        });  
        
        
   
    return ( 
            <ul>
                {data?.results.map((repository) => {
                    return (
                        <li key={repository.id}>                            
                          <Products key={repository.id} item={repository}/> 
                        </li>
                    )
                }
                )}
            </ul>
     )

}

export default Itens;