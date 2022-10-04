import { Routes, Route , Navigate} from "react-router-dom";
import { About } from "../shared/components/About";
import { Contact } from "../shared/components/Contact";
import { Home } from "../shared/components/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
    );
};
