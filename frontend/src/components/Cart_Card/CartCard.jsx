import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotal,
  selectQuantity,
} from "../../Redux/slices/CartSlices/cartSlice";

const CartCard = ({ cartProduct }) => {
  console.log("SINGLE OBJECT", cartProduct);
  const { brandName, price, imageUrl, quantity } = cartProduct;
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const cartItems = useSelector(selectCartItems);
  console.log("CART ITEMS", cartItems);

  console.log("TYPE OF ", typeof price.current.value);

  return (
    <tr>
      <td className="product-col">
        <img src={`https://${imageUrl}`} alt="" />
        <div className="pc-title">
          <h4>{brandName}</h4>
          <p>${price.current.value}</p>
        </div>
      </td>
      <td className="quy-col">
        <div className="quantity">
          <div className="pro-qty">
            <input
              onChange={(e) => setItemQuantity(Number(e.target.value))}
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
      <td className="total-col">
        {<h4>${price.current.value * itemQuantity}</h4>}
      </td>
    </tr>
  );
};

export default CartCard;
