import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      <div>
        {cartItems.length === 0 && (
          <h4>Cart is empty, Add Food Items to order!</h4>
        )}{" "}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
