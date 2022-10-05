import { Routes, Route , Navigate} from "react-router-dom";
import { About } from "../shared/components";
import { Contact } from "../shared/components";
import { Home } from "../shared/components";

export const AppRoutes = () => 
{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
    );
};
