import React from "react";

const CartItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <h1>{item}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
