import { Navigate, Route, Routes } from "react-router-dom";
import { Category } from "../shared/components/Category";
import Section from "../shared/components/templates/Section";

export const AppRoutes = () => 
{
    return (
        <Routes>
            <Route path="/" element={<Section children={undefined}/>}/>
            <Route path="/cart" element={<Category/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
        </Routes>
    );
};
