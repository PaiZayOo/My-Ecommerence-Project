import { Button } from '@mantine/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const SearchChild = (item) => {
    const { id, title, price, image } = item;
    const dispatch = useDispatch();
    const [buttonName, setButtonName] = useState("Add to cart");
  
  
    const handleAddToCart = () => {
      dispatch(addToCart(item));
      setButtonName("Added!");
    };

  return (
    <div>
       <div className=" border px-6 py-3  w-[250px] bg-gray-100 rounded-2xl">
        <div>
          <img src={image} className=" max-w-[100%] h-[150px] my-3" alt="" />
        </div>
        <h1 className=" font-semibold my-2">{title.substring(0, 20)}...</h1>
        <h1>$ {price}</h1>
        <div className=" my-3 text-center">
        <Button onClick={handleAddToCart} variant="outline" color="indigo" radius="md" >
          {buttonName
          }
        </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchChild
