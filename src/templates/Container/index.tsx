import { FrontendProps } from "../../interfaces/interfaces";
import Header from "../../Organisms/Header";
import { Category } from "../../shared/components/Category";
import * as S from './styles';


const Container = ({children}:FrontendProps) => 
{
    return (
        <>
            
        <S.Container>
            <header>
                <Header/>
            </header>
            <main>                
                {children}
            </main>
            <aside>
                <Category/>
            </aside>
            <footer></footer>
            

        </S.Container>
        </>
    )
};

export default Container;