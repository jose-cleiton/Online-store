import axios from 'axios';
import { useQuery } from 'react-query';
import { IQueriedRepositories } from '../../../../interfaces/interfaces';

import Products from '../../atomos/img/product';
import * as S from './styles';
const query = 'brinquedos';
  
const URL =`https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

const Cards = () => {
const { data } = useQuery<IQueriedRepositories>('products', 
        async () =>
        {
            const response = await axios.get(URL)
            return response.data
        });

return (
    <S.Cards>  
        <ul>
           
         
            {data?.results.map((repository) => {
                return (
                    <li key={repository.id}>
                        <Products url={repository.thumbnail} title={repository.title} value={repository.price}/>
                    </li>
                )
            }
            )}
        </ul>
    </S.Cards>
)

}

export default Cards;
     