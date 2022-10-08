import Button from '../../atomos/Button';
import Logo from '../../molecules/Logo';
import {SearchBar} from '../../atomos/SearchBar';
import * as S from './styles';


const Header = () => 
{

  return(

    <S.Box>
      <Logo/>
      <SearchBar/>
     <Button/>
    </S.Box>
  
  
  )


}


  
export default Header;