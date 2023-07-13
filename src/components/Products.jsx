import React, { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import Product from "./Product";
const url = `https://fakestoreapi.com/products`;

const Products = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rep = await fetch(url);
        const data = await rep.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className=" flex justify-center h-screen items-center ">
        <Loader color="indigo" size="lg" />;
      </div>
    );
  }
  return (
    <div className=" mt-5 flex flex-wrap gap-9  justify-center">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
