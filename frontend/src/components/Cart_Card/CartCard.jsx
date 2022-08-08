import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../Redux/slices/CartSlices/cartSlice";

import {
  selectCartItems,
  changeCartQuantity,
} from "../../Redux/slices/CartSlices/cartSlice";

const CartCard = ({ cartProduct }) => {
  const { id, brandname, price, imageurl, quantity } = cartProduct;
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const handleChange = (id, val) => {
    dispatch(changeCartQuantity({ id, val }));
    setItemQuantity(Number(val));
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
              onChange={(e) => handleChange(id, e.target.value)}
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
