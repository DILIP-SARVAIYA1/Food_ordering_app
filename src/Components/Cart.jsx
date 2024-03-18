import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const itemData = useSelector((store) => store.cart?.items);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl m-4">Cart</h1>
      <div className="flex justify-center flex-col">
        <ItemList items={itemData} />
        <button
          className=" my-6 mx-10 border border-black px-2 py-1 bg-red-300 text-black rounded-md"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
