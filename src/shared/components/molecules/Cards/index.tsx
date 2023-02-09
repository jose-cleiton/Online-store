import { useContext } from 'react';
import Itens from '../../../../services/Itens';
import { renderProducts } from '../../../../services/products';
import { UseContext } from '../../../contexts/AppContext';
import * as S from './styles';

export const Cards = () => {
    const { info} = useContext(UseContext);   
  
return (
    <S.Cards> 
        <ol>            
            { 
                info.length > 1 
                ? renderProducts(info) 
                : Itens()
            }
        </ol>
    </S.Cards>
)}

export default Cards;