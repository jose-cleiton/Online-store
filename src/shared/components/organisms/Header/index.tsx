import Button from '../../atomos/Button';
import Logo from '../../molecules/Logo';
import {SearchBar} from '../../atomos/SearchBar';
import * as S from './styles';
import { SetStateAction, useEffect, useState } from 'react';
import { URL } from '../../../../services/url';

const Header = () => 
{
  const [info, setInfo] = useState({});
  const [text , setText] = useState('');
  




    useEffect(() => {
       if(text) {
         fetch(`${URL}${text}`)
         .then((response) => response
         .json())
         .then((data) => {
            setInfo(data)
         })
       }

    }, [text]);



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