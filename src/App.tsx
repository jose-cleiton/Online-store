import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Section from "./shared/components/templates/Section";



export  const App = () => (
    
    <BrowserRouter>  
        
            <Section >
            <AppRoutes/>        
            <AppRoutes/>
            </Section>
        
    </BrowserRouter>
)




        
    

