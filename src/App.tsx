
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from './shared/themes/Light';
import Section from "./shared/components/templates/Section";


export  const App = () => (

    <ThemeProvider theme={LightTheme} >

    <BrowserRouter>
    <Section>
       
        
        <AppRoutes/>

    </Section>
    </BrowserRouter>

    </ThemeProvider>

)


// Path: src/index.tsx

        
    

