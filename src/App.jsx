import { Routes, Route } from "react-router-dom";
import ClientLayout from "./Layouts/Client/Header";
import Contact from "./pages/Client/Contact";
import Products from "./pages/Client/Products";
import ProductsAdmin from "./pages/Admin/ProductsAdmin";
import ProductDetail from "./pages/Client/ProductDetail";
import AdminLayout from "./Layouts/Admin/Header";
import AddProducts from "./pages/Admin/AddProducts";
import DashBoard from "./pages/Admin/Dashboard";
import Home from "./pages/Client/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="*" element={<div>Element not found</div>} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="*" element={<div>Element not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
