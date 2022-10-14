
import { useContext } from 'react';
import { UseContext } from '../../../contexts/AppContext';
import Products from '../../product';
import * as S from './styles';

  


const Cards = () => {
    const { info} = useContext(UseContext);

   const renderProducts = () => {
         return info.map((item) => <Products key={item.id} item={item}/>)
   };


return (
    <S.Cards>  

        <ul>
            
            { info.length > 1 ? renderProducts() : <h1>Carregando...</h1>}
        </ul>
    </S.Cards>
)


}

export default Cards;