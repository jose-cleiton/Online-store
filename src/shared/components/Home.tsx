
import axios from 'axios';
import { useQuery } from 'react-query';
import { IRepository } from '../../interfaces/interfaces';
import { Container } from '../../templates/Container/styles';



     
   
  
  const URL ="https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola" 
 

  const Home = () => {
      
        const { data } = useQuery<IRepository>('products', 
        async () =>
        {
            const response = await axios.get(URL)
            return response.data
        });
        
       
        
   
          
    
    return (
        
     <main>
            <ul>
                {data?.results.map((product) => {
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                        </li>
                    )
                })}
            </ul>
     </main>
         
      
      
  
     )

}

export default Home;