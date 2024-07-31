import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";
import DeleteModal from "../../../Components/ActionModals/DeleteModal";
import AdminTableRow from "../../../Components/AdminTableRow";
import EditModal from "../../../Components/ActionModals/EditModal";

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
  
  

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setAdminData(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      {productToEdit && (
        <EditModal
          productToEdit={productToEdit}
          setProductToEdit={setProductToEdit}
        />
      )}
      <ul className="divide-y divide-gray-200">
        {adminData.products.length === 0 ? (
          <Loading />
        ) : (
          adminData.products.map((item) => (
            <AdminTableRow
              key={item.id}
              item={item}
              setProductToEdit={setProductToEdit}
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
