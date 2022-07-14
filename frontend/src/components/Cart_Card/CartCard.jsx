import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotal,
  selectQuantity,
} from "../../Redux/slices/CartSlices/cartSlice";

const CartCard = ({ cartProduct }) => {
  const { title, price, images, id, quantity } = cartProduct;
  const [itemQuantity, setItemQuantity] = useState(quantity);
  console.log(cartProduct);
  const cartItems = useSelector(selectCartItems);

  return (
    <tr>
      <td className="product-col">
        <img src="img/cart/1.jpg" alt="" />
        <div className="pc-title">
          <h4>{title}</h4>
          <p>${price}</p>
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
        <h4>${price * itemQuantity}</h4>
      </td>
    </tr>
  );
};

export default CartCard;
