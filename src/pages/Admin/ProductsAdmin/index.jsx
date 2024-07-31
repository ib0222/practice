import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";

const ProductsAdmin = () => {
  const [adminData, setAdminData] = useState({ products: [] });
  const [productToDelete, setProductToDelete] = useState(null);

  function deleteProduct(deleteId) {
    fetch(`http://localhost:3000/products/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setAdminData((prevData) => ({
          products: prevData.products.filter((product) => product.id !== deleteId),
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
      <ul className="divide-y divide-gray-200">
        {adminData.products.length === 0 ? (
          <Loading />
        ) : (
          adminData.products.map((item) => (
            <li key={item.id} className="p-4 flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-contain"
              />
              <div className="flex-1">
                <div className="font-bold text-lg">{item.title}</div>
                <div className="text-gray-700">Price: ${item.price}</div>
                <div className="text-gray-700">Category: {item.category}</div>
                <div className="text-gray-700">Description: {item.description}</div>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none"
                onClick={() => setProductToDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>

      {productToDelete && (
        <div
          id="deleteConfirmationModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setProductToDelete(null)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => deleteProduct(productToDelete)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsAdmin;
