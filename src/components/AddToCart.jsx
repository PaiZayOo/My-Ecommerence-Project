import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import Swal from "sweetalert2";
import { clearAllItems } from "../features/cartSlice";

const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch  = useDispatch();

  const showAlert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Remove all items from your shopping cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove all!'
    }).then((result) => {
      if (result.isConfirmed) {
          dispatch(clearAllItems());
        Swal.fire(
          'Removed!',
          'All items has been removed.',
          'success'
        )
      }
    })
  }
  if (cartItems.length === 0) {
    return (
      <div className=" h-screen items-center justify-center flex flex-col">
        <p className="  text-5xl text-blue-600">Cart Item is Empty</p>
        <Link to="/">
          <Button variant="outline" className=" mt-10" color="blue" size="lg">
            Fill it
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div>
        {cartItems?.map((product) => {
          return <Cart key={product.id} {...product} />;
        })}
      </div>
      <hr className=" my-3" />
      <div className=" flex justify-around">
        <p>Total</p>
        <p>$ {totalAmount.toFixed(2)}</p>
      </div>

      <div className=" justify-center flex mt-3">
        <Button onClick={showAlert} variant="outline" className=" mt-3" color="red" size="lg">
          Clear All Items
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
