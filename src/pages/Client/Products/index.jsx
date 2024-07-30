import React, { useEffect, useState } from "react";
import Card from "../../../Layouts/Client/Card";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl my-6 font-semibold">
          All products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 lg:mx-20 gap-10 my-4 ">
          {data.length === 0 ? (
            <div>Loading...</div>
          ) : (
            data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.images[0]}
                title={item.title}
                price={item.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
