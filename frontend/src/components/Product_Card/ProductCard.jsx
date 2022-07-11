import React from "react";
import { Link } from "react-router-dom";
import { addProduct } from "Redux/slices/ProductSlices/productSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, images, id } = product;

  return (
    <div className="col-lg-3 col-sm-6">
      <div className="product-item">
        <div className="pi-pic">
          <img src="//unsplash.it/500/300" alt="product" />
          <div className="pi-links">
            <a href="#" className="add-card">
              <i className="flaticon-bag"></i>
              <span>ADD TO CART</span>
            </a>
            <Link to={`details/${id}`}>
              <a
                onClick={() => dispatch(addProduct(product))}
                href="#"
                className="wishlist-btn"
              >
                <i className="flaticon-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="pi-text">
          <h6>${price}</h6>
          <p>{title} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
