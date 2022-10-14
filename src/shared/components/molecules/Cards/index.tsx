
import { useContext } from 'react';
import { UseContext } from '../../../contexts/AppContext';
import Products from '../../product';
import * as S from './styles';

  


const Cards = () => {
    const { info} = useContext(UseContext);




return (
    <S.Cards>  
        <ul>
            {info.map((item) => {
              
                
                return (
                    <li key={item.id}>
                        <Products item={item}/>

                    </li>
                )
            })}
        </ul>
    </S.Cards>
)


}

export default Cards;