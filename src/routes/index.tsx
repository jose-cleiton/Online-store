import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../shared/components";
import { Category } from "../shared/components/Category";

export const AppRoutes = () => 
{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Category/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
    );
};
