import { Routes,Route } from "react-router-dom"
import ClientLayout from "./Layouts/Client/Header"
import Contact from "./pages/Client/Contact"
import Products from "./pages/Client/Products"
import ProductDetail from "./pages/Client/ProductDetail"
import AdminLayout from "./Layouts/Admin/Header"
import AddProducts from "./pages/Admin/AddCategory"
import DashBoard from "./pages/Admin/Dashboard"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout/>}>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/productdetail" element={<ProductDetail/>}/>
        </Route>
        <Route path="/" element={<AdminLayout/>}>
          <Route path="addproducts" element={<AddProducts/>}/>
          <Route path="products" element = {<Products/>}/>
          <Route path="dashboard" element={<DashBoard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
