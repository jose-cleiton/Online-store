import { FrontendProps } from "../../../../interfaces/interfaces";
import Aside from "../../organisms/Aside";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Main from "../../organisms/Main";
import * as S from './styles';


const Section = ({children}:FrontendProps) => 
{
    return (
        <>
        
                <Header />
                
                                  
        <div className="container">
            
        <S.Section>
                <Main/>
                <Aside/>
                <Footer/>
            

        </S.Section>
        
            </div>

        </>
    )
};

export default Section;