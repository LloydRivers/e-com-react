import React from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../../Redux/slices/ProductSlices/productSlice";
import { addToCart } from "../../Redux/slices/CartSlices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { brandName, imageUrl, id, price } = product;
  console.log(product);

  return (
    <div className="col-lg-3 col-sm-6">
      <div className="product-item">
        <div className="pi-pic">
          <img src={`https://${imageUrl}`} alt="product" />
          <div className="pi-links">
            <a
              className="add-card"
              onClick={() => dispatch(addToCart(product))}
            >
              <i className="flaticon-bag"></i>
              <span>ADD TO CART</span>
            </a>
            <Link to={`details/${id}`}>
              <span
                onClick={() => dispatch(addProduct(product))}
                className="wishlist-btn"
              >
                <i className="flaticon-heart"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="pi-text">
          <h6>${price.current.text}</h6>
          <p>{brandName} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
