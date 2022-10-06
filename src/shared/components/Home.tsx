
import axios from 'axios';
import { useQuery } from 'react-query';
import { IRepository } from '../../interfaces/interfaces';
import { getCategories } from '../../services/api';


     
   
  
  const URL ="https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola" 
 

  const Home = () => {
      
        const { data } = useQuery<IRepository>('products', 
        async () =>
        {
            const response = await axios.get(URL)
            return response.data
        });
        
       
        
   
          
    
    return (
        
       <ul>
        {
        data?.results.map((product) => 
            {
                return (
                    <li key={product.id}>
                        <h1>{product.title}</h1>
                        <img src={product.thumbnail} alt={product.title}/>
                        <p>{product.price}</p>
                    </li>
                )

            }
        )
        }


       </ul>
      
  
     )

}

export default Home;