import axios from 'axios';
import { useQuery } from 'react-query';
import { IQueriedRepositories } from '../interfaces/interfaces';
import Products from '../shared/components/product';
import { research } from '../interfaces/interfaces';

const Itens = () => {
      const URL =`https://api.mercadolibre.com/sites/MLB/search?q=${research()}`;

        const { data } = useQuery<IQueriedRepositories[]>('products', 
        async () =>
        {
            const response = await axios.get(URL)          
            return response.data.results
        });  
      return data?.map(
        (
            item: any
        ) => <Products key={item.id} item={item}/>
        )
    }

export default Itens;