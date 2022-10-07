import { FrontendProps } from "../../interfaces/interfaces";
import * as S from './styles';


const Container = ({children}:FrontendProps) => 
{
    return (
        <>
            
        <S.Container>
            <header></header>
            <main></main>
            <aside></aside>
            <footer></footer>
            

        </S.Container>
        </>
    )
};

export default Container;