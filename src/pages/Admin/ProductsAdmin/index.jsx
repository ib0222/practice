import React, { useEffect, useState } from "react";

const ProductsAdmin = () => {
  const [adminData, setAdminData] = useState({ products: [] });

  function deleteProduct(deleteId) {
    fetch(`http://localhost:3000/products/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setAdminData(data));
  }, [adminData]);

  return (
    <div className="container mx-auto p-4">
      <ul className="divide-y divide-gray-200">
        {adminData.products.map((item) => (
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
              <div className="text-gray-700">
                Description: {item.description}
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none"
              onClick={() => {
                deleteProduct(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div
        id="successModal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* Modal content */}
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="successModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Success</span>
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Successfully removed product.
            </p>
            <button
              data-modal-toggle="successModal"
              type="button"
              className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdmin;
