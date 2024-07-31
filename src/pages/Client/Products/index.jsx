import React, { useEffect, useState } from "react";
import Card from "../../../Layouts/Client/Card";
import Loading from "../../../Components/Loading";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl my-6 font-semibold">
          All products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 lg:mx-20 gap-10 my-4">
          {data.length === 0 ? (
            <Loading />
          ) : (
            data.products.map((item) => (
              <Link to={`/products/${item.id}`}>
                {" "}
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
