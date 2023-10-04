import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const itemData = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button onClick={handleClearCart}>Clear cart</button>
        <ItemList items={itemData} />
      </div>
    </div>
  );
};

export default Cart;
