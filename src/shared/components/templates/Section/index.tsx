import { FC } from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import MenuPrincipal from "../../organisms/Header/menu/MenuPrincipal";

import { HeaderWrapper } from "../../organisms/Header/styles";
import Main from "../../organisms/Main";
import * as S from "./styles";
interface SectionProps {
  // Propriedades aqui, caso necessário
}

const Section: FC<SectionProps> = () => {
    return (
        <>
            <HeaderWrapper>
                <div className="container">                
                    <Header />
                    <MenuPrincipal/>                   

                </div>  
            </HeaderWrapper>
            <div className="container">
                <S.SectionWrapper>
                    <Main />
                    <Footer />
                </S.SectionWrapper>
            </div>
        </>       
  );
};


export default Section;
