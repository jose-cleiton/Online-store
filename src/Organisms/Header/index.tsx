import Button from '../../shared/components/atomos/Button';
import Logo from '../../shared/components/molecules/Logo';
import Menu from '../../shared/components/organisms/Menu';
import * as S from './styles';


const Header = () => 
{

  return(

    <S.Box>
      <Logo/>
      <Menu/>
     <Button/>
    </S.Box>
  
  
  )


}


  
export default Header;