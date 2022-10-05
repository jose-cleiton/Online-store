import { FrontendProps } from "../../interfaces/interfaces";
import * as S from './styles';


const Frontend = ({children}:FrontendProps) => 
{
    return (
        <>
        <S.Container>
            {children}

        </S.Container>
        </>
    )
};

export default Frontend;