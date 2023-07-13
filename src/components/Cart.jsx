/* eslint-disable no-unused-vars */
import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../features/cartSlice";

const Cart = (product) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, price, image, quantity } = product;
  const dispatch = useDispatch();

  const oneItemPrice = price * quantity;

  return (
    <div>
      <div className=" flex justify-around items-center mt-5 ">
        <div className=" flex items-center max-w-[250px]">
          <img src={image} alt="" className=" max-w-[100px] h-[100px] mr-5" />
          <div>
            <h1 className=" font-semibold my-1">{title.substring(0, 25)}...</h1>
            <h1> $ {oneItemPrice.toFixed(2)}</h1>
            <h1
              onClick={() => dispatch(removeItem(product))}
              className=" text-red-600 cursor-pointer"
            >
              remove
            </h1>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div
            onClick={() => dispatch(increaseQty(product))}
            className=" cursor-pointer"
          >
            <SlArrowUp />
          </div>
          <p>{quantity}</p>

          <div
            className=" cursor-pointer"
            onClick={() => quantity > 1 && dispatch(decreaseQty(product))}
          >
            <SlArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
