import { useFatch } from '../hooks/useFatch';
import { IResults } from '../../interfaces/interfaces';

type IRepository = {
    site_id: string;
    country_default_time_zone: string;
    query:string;
    paging: {
        total: number;
        primary_results: number;
        offset: number;
        limit: number;
    };
    results: Array<IResults>

    }
     
   
  
  const URL ="https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola" 


export const Home = () => {
    const { data, error } = useFatch<IRepository>(URL)


    
    return (
        <ul>
            {data?.results.map((item) => {
                return (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.price}</p>
                    </li>
                )
            })}
        </ul>
    )

}