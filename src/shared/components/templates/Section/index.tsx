import { FrontendProps } from "../../../../interfaces/interfaces";
import Aside from "../../organisms/Aside";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Main from "../../organisms/Main";
import * as S from './styles';


const Section = ({children}:FrontendProps) => 
{
    return (
        
            
        <S.Section>
            
            <Header/>            
            <Main/>
            <Aside/>
            <Footer/>
            

        </S.Section>
        
    )
};

export default Section;