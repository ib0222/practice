import React, { useState } from "react";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateInputs = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!price) newErrors.price = "Price is required";
    if (isNaN(price)) newErrors.price = "Price must be a number";
    if (!description) newErrors.description = "Description is required";
    if (!image) newErrors.image = "Image URL is required";
    if (!category) newErrors.category = "Category is required";
    return newErrors;
  };

  function postProduct() {
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length === 0) {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: price,
          description: description,
          image: image,
          category: category,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setSuccessMessage("Product added successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
          setTitle("");
          setPrice("");
          setDescription("");
          setImage("");
          setCategory("");
        })
        .catch((error) => console.error("Error:", error));
    } else {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors("");
      }, 2000);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Product</h2>
      {successMessage && (
        <div className="mb-4 p-4 text-green-700 bg-green-100 border border-green-400 rounded">
          {successMessage}
        </div>
      )}
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Title"
            className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>
        <div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product Price"
            className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 ${
              errors.price
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product Description"
            className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 ${
              errors.description
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <div>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Product Image URL"
            className={`w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 ${
              errors.image
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}
        </div>
        <div>
          <select
            id="category"
            className="bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder:text-transparent" onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
            <option value="Women's clothing">Women's clothing</option>
          </select>
        </div>
        <div>
        </div>
        <button
          onClick={postProduct}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
