import { FrontendProps } from "../../interfaces/interfaces";
import Header from "../../Organisms/Header";
import * as S from './styles';


const Frontend = ({children}:FrontendProps) => 
{
    return (
        <>
        <S.Container>
            <Header/>
            {children}

        </S.Container>
        </>
    )
};

export default Frontend;