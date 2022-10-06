import { FrontendProps } from "../../interfaces/interfaces";
import Header from "../../Organisms/Header";
import * as S from './styles';


const Frontend = ({children}:FrontendProps) => 
{
    return (
        <>
            <Header/>
        <S.Container>
            {children}

        </S.Container>
        </>
    )
};

export default Frontend;