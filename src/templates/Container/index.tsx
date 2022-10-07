import { FrontendProps } from "../../interfaces/interfaces";
import Header from "../../Organisms/Header";
import * as S from './styles';


const Container = ({children}:FrontendProps) => 
{
    return (
        <>
            
        <S.Container>
            <header>
                <Header></Header>
            </header>
            <main>
                {children}
            </main>
            <aside></aside>
            <footer></footer>
            

        </S.Container>
        </>
    )
};

export default Container;