import ItemList from "./ItemList";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/cart";
import CartItems from "./CartItems";
import { RES_CARD_IMG } from "../Utils/Constants";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <h1 className=" font-bold text-2xl text-center mt-44">
        Cart is empty Please Add Items
      </h1>
    );
  } else {
    return (
      <div className="mx-32 flex justify-center gap-5 m-8">
        <div>
          {cartItems.map((item) => {
            return (
              <div
                key={item?.card?.info?.id}
                className="text-left flex justify-between items-center border-b-2 "
              >
                <div className="flex flex-col w-9/12 p-4">
                  <span> {item?.card?.info?.name}</span>
                  <span className="text-sm mt-4">
                    <span>₹ </span>
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    {item?.card?.info?.description}
                  </p>
                  <div>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="px-2 rounded-full m-2 border cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      value={item?.quantity}
                      className="border text-center border-gray-400 outline-none w-8"
                      type="number"
                    />
                    <button
                      className="px-2 rounded-full m-2 border cursor-pointer"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="">
                  <img
                    className="w-[130px] h-[100px] shadow-lg object-cover rounded-md"
                    src={RES_CARD_IMG + item?.card?.info?.imageId}
                    alt="Error"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className=" border border-gray-300 m-4 fixed">
            <div className="text-lg">
              <h1 className=" bg-slate-50 p-4 text-gray-400 font-bold text-xl">
                Price Details
              </h1>
              <div className="flex justify-between p-4">
                <div>Price({cartItems.length})</div>
                <span>₹ {Math.round(getCartTotal())}</span>
              </div>
              <div className="flex justify-between p-4">
                <div>Discount</div>
                <span className="text-green-600">
                  ₹ - {Math.round((getCartTotal() / 100) * 11)}
                </span>
              </div>
            </div>

            <div className="font-bold text-lg flex justify-between p-4">
              <div>Total Amount </div>
              <div>
                <span>₹ </span>
                {Math.round(getCartTotal()) -
                  Math.round((getCartTotal() / 100) * 11)}
              </div>
            </div>
            <button
              className=" py-1 bg-red-500 text-white w-full"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
