import Button from '../../atomos/Button';
import Logo from '../../molecules/Logo';
import {SearchBar} from '../../atomos/SearchBar';
import * as S from './styles';
import { SetStateAction, useContext, useEffect, useState } from 'react';
import { URL } from '../../../../services/url';
import { UseContext } from '../../../contexts/AppContext';

const Header = () => 
{
  const{ setInfo} = useContext(UseContext);
  const [text , setText] = useState('');
  




    useEffect(() => {
       if(text) {
         fetch(`${URL}${text}`)
         .then((response) => response
         .json())
         .then((data) => {
            setInfo(data.results)
            
         })
       }
     
       

    }, [setInfo, text]);



  return(

    <S.Box>
      <Logo/>
      <SearchBar 
      value={text}  
      onChange={(search: SetStateAction<string>) => setText(search)}
      />
     <Button/>
    </S.Box>
  
  
  )


}


  
export default Header;