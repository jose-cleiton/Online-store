import { Navigate, Route, Routes } from "react-router-dom";
import Category from "../shared/components/category/Category";
import { ShoppingCartPage } from "../shared/components/home/shopCart";

import Section from "../shared/components/templates/Section";

export const AppRoutes = () => 
{
    return (
        <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
            <Route path="/cart" element={<Category />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    );
};
