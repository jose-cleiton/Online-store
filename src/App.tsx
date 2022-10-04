
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from './shared/themes/Light';

export  const App = () => (

    <ThemeProvider theme={LightTheme} >

    <BrowserRouter>
       <AppRoutes/>
    </BrowserRouter>

    </ThemeProvider>

)


// Path: src/index.tsx

        
    

