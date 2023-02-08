import { SearchBar } from '../../atomos/SearchBar';
import { Discount, Logo } from '../../molecules/Logo';


import * as S from './styles';

const Header = () => 
{
 

  return(

      <>
      
    <S.Head >
      
    <Logo/>
    <SearchBar />
      <Discount /> 
  </S.Head>
     

</>

  
  )


}


  
export default Header;