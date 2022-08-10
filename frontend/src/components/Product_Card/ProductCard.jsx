import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/slices/CartSlices/cartSlice";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/slices/ProductSlices/productSlice";

import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { brandname, color, id, imageurl, name, price } = product;
  const [heartColor, setHeartColor] = useState(false);

  const addedToCartConformation = () => {
    dispatch(addToCart(product));
    Swal.fire({
      title: "Added to cart",
      text: "Product has been added to cart",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleDetailsProduct = () => {
    dispatch(addProduct(product));
  };

  const handleHeart = () => {
    setHeartColor(!heartColor);
  };
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="product-item">
        <div className="pi-pic">
          <Link onClick={handleDetailsProduct} to={`details/${id}`}>
            <img
              className="img-fluid"
              style={{ width: "100%" }}
              src={`${imageurl}`}
              alt="product"
            />
          </Link>
          <div className="pi-links">
            <a className="add-card" onClick={addedToCartConformation}>
              <i className="flaticon-bag"></i>
              <span>ADD TO CART</span>
            </a>

            <span className="wishlist-btn">
              <a onClick={handleHeart}>
                <i style={{ color: heartColor }} className="flaticon-heart"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="pi-text">
          <h6>${price}</h6>
          <p>{brandname} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
