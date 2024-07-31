import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";
import DeleteModal from "../../../Components/ActionModals/DeleteModal";
import AdminTableRow from "../../../Components/AdminTableRow";

const ProductsAdmin = () => {
  const [adminData, setAdminData] = useState({ products: [] });
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  function deleteProduct(deleteId) {
    fetch(`http://localhost:3000/products/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setAdminData((prevData) => ({
          products: prevData.products.filter(
            (product) => product.id !== deleteId
          ),
        }));
        setProductToDelete(null);
      });
  }

  function editProduct(editId) {
    
    
  }

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setAdminData(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ul className="divide-y divide-gray-200">
        {adminData.products.length === 0 ? (
          <Loading />
        ) : (
          adminData.products.map((item) => (
            <AdminTableRow
              item={item}
              productToEdit={productToEdit}
              setProductToDelete={setProductToDelete}
            />
          ))
        )}
      </ul>

      {productToDelete && (
        <DeleteModal
          productToDelete={productToDelete}
          deleteProduct={deleteProduct}
          setProductToDelete={setProductToDelete}
        />
      )}
    </div>
  );
};

export default ProductsAdmin;
