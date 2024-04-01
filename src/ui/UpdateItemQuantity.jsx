import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";
import Button from "./Button";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3 ">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>

      <span className="">{currentQuantity}</span>

      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
