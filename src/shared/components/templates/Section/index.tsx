import { FC } from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Main from "../../organisms/Main";
import * as S from "./styles";

interface SectionProps {
  // Propriedades aqui, caso necessário
}

const Section: FC<SectionProps> = () => {
    return (
    <>
        <div style={{ backgroundColor: "#FFF159", height: "92px" }}>
            <div className="container">
                <Header />
            </div>
        </div>
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
