import { useFatch } from '../hooks/useFatch';
import { IRepository} from '../../interfaces/interfaces';
import Frontend from '../../templates/Frontend';


     
   
  
  const URL ="https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola" 


const Home = () => {
    const { data, error } = useFatch<IRepository>(URL)

        
    
    return (
        <>
       <Frontend>
        <ul>
            {
                data?.results.map((item) => 
                {
                    return (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.price}</p>
                        </li>
                    )
                })
            }
        </ul>
        </Frontend>
        
      </>
  
     )

}

export default Home;