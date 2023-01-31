import { Routes, Route } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import SingleProduct from "../pages/SingleProduct";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      {/* Página 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router