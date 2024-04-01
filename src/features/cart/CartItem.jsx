import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentItemQuantity(pizzaId));

  return (
    <li className="py-3  sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold "> {formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
