import Button from '../../shared/components/atomos/Button';
import Logo from '../../shared/components/molecules/Logo';
import {SearchBar} from '../../shared/components/atomos/SearchBar';
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