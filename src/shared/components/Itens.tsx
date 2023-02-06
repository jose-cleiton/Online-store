import { useQuery } from 'react-query';
import { IQueriedRepositories } from '../../interfaces/interfaces';
import { getProduct } from '../../services/getProduct';

  const Itens = () => {
      
    const { data } = useQuery<IQueriedRepositories>('products', getProduct);
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