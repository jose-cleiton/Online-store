import axios from 'axios';
import { useQuery } from 'react-query';
import { IQueriedRepositories } from '../../../../interfaces/interfaces';

import Products from '../../product';
import * as S from './styles';
import { URL } from '../../../../services/url';

  


const Cards = () => {

    const { data } = useQuery<IQueriedRepositories>('products', async () =>
    {
        const {data} = await axios.get(URL)
        return data
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
     