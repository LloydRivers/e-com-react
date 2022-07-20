import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotal,
  selectQuantity,
} from "../../Redux/slices/CartSlices/cartSlice";

const CartCard = ({ cartProduct }) => {
  const { brandname, price, imageurl, quantity } = cartProduct;

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const cartItems = useSelector(selectCartItems);
  console.log("CART ITEMS", cartItems);

  const handleChange = (e) => {
    setItemQuantity(Number(e.target.value));
  };
  return (
    <tr style={{ borderBottom: "1px solid #dadada" }}>
      <td className="product-col">
        <img src={`${imageurl}`} alt="" />
      </td>
      <td className="quy-col">
        <div className="quantity">
          <div className="pro-qty">
            <input
              onChange={handleChange}
              type="number"
              value={itemQuantity}
              min={1}
            />
          </div>
        </div>
      </td>
      <td className="size-col">
        <h4>Size M</h4>
      </td>
      <td className="total-col">{<h4>${Number(price) * itemQuantity}</h4>}</td>
    </tr>
  );
};

export default CartCard;
