import { useDispatch } from "react-redux";

import Button from "./Button";
import { removeItem } from "../features/cart/cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
