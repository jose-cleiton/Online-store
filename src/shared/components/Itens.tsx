
import axios from 'axios';
import { useQuery } from 'react-query';
import { IQueriedRepositories } from '../../interfaces/interfaces';


     
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
                            <p>R${repository.price}</p>
                            <img src={repository.thumbnail} alt={repository.title}/>
                          
                        </li>
                    )
                }
                )}
            </ul>
        </>
    
     
         
      
      
  
     )

}

export default Itens;