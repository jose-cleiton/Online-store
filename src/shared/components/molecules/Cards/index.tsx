
import { useContext } from 'react';
import { renderProducts } from '../../../../services/products';
import { UseContext } from '../../../contexts/AppContext';
import * as S from './styles';




  

export const Cards = () => {
    const { info} = useContext(UseContext);    
return (
    <S.Cards> 
        <ul>            
            { 
                info.length > 1 
                ? renderProducts(info) 
                : <h1>Carregando...</h1>
            }
        </ul>
    </S.Cards>
)}

export default Cards;