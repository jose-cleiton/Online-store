import { Navigate, Route, Routes } from "react-router-dom";
import { Contact, Home } from "../shared/components";
import { Category } from "../shared/components/Category";

export const AppRoutes = () => 
{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
    );
};
