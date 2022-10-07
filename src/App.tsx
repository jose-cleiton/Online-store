
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from './shared/themes/Light';
import Container from "./templates/Container";


export  const App = () => (

    <ThemeProvider theme={LightTheme} >

    <BrowserRouter>
    <Container>
       
        
       <AppRoutes/>

    </Container>
    </BrowserRouter>

    </ThemeProvider>

)


// Path: src/index.tsx

        
    

