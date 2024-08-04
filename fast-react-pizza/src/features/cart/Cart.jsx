import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const userName = useSelector((store) => store.user.userName);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
