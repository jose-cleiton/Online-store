import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Section from "./shared/components/templates/Section";

import 'bootstrap/dist/css/bootstrap.min.css';

export  const App = () => (
    
    <BrowserRouter>  
        
            <Section >
            <AppRoutes/>        
            <AppRoutes/>
            </Section>
        
    </BrowserRouter>
)




        
    

