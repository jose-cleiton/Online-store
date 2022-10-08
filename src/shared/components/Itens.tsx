
import axios from 'axios';
import { useQuery } from 'react-query';
import { IQueriedRepositories, IRepository } from '../../interfaces/interfaces';
import { Main } from './organisms/Main/styles';


     
   const query = 'celular';
  
  const URL =`https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
 

  const Itens = () => {
      
        const { data } = useQuery<IQueriedRepositories>('products', 
        async () =>
        {
            const response = await axios.get(URL)
            return response.data
        });
        
       
        
   
          
    
    return (
     
        <>
            <h1>Home</h1>

            <ul>
                {data?.results.map((repository) => {
                    return (
                        <li key={repository.id}>
                            <strong>{repository.title}</strong>
                            <p>{repository.price}</p>
                            <p>{repository.thumbnail}</p>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    
     
         
      
      
  
     )

}

export default Itens;