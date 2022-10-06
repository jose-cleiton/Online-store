
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from './shared/themes/Light';
import Frontend from "./templates/Frontend";

export  const App = () => (

    <ThemeProvider theme={LightTheme} >

    <BrowserRouter>
    <Frontend>
       <AppRoutes/>

    </Frontend>
    </BrowserRouter>

    </ThemeProvider>

)


// Path: src/index.tsx

        
    

