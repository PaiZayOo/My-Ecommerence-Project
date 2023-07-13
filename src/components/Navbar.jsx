import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rep = await fetch(`https://fakestoreapi.com/products`);
        const data = await rep.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );


  const submitHandler = (e) =>{
    e.preventDefault();
    nav('/search',{state:filterProduct});
    setSearch('')

  }

  return (
    <div className=" container mx-auto">
      <div className=" flex  flex-wrap justify-around px-2 items-center py-5 shadow-sm">
        <Link to="/">
          <h1 className=" font-semibold">
            <span className=" text-blue-500 font-semibold">E-</span>Shop
          </h1>
        </Link>

        <div className=" flex items-center">
          <Link to="/">
            <div className=" mr-4 hover:text-blue-400">Home</div>
          </Link>
          <Link to="/products">
            <div className=" hover:text-blue-400">Products</div>
          </Link>
        </div>
        <div className=" flex items-center">
          <form onSubmit={submitHandler}>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} variant="filled" placeholder="Search" size="md" />
          </form>
          <Link to="/addToCart">
            <div className=" relative">
              <div className=" text-3xl ml-2">
                <BsFillCartPlusFill />
              </div>
              <div className=" absolute top-[-12px] left-[25px]">
                <Badge size="sm" radius="md" variant="filled">
                  {cartItems.length}
                </Badge>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
