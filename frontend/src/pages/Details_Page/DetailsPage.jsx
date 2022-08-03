import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectProduct } from "../../Redux/slices/ProductSlices/productSlice";
import { addToCart } from "../../Redux/slices/CartSlices/cartSlice";
const DetailsPage = () => {
  const product = useSelector(selectProduct);
  const { brandname, imageurl, id, price, name } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <div className="site-pagination">
            <a href="">Home</a> /<a href="">Shop</a>
          </div>
        </div>
      </div>

      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <a href="./category.html"> &lt;&lt; Back to Category</a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="product-pic-zoom">
                <img className="product-big-img" src={imageurl} alt="" />
              </div>
            </div>
            <div className="col-lg-6 product-details">
              <h2 className="p-title">{name}</h2>
              <h3 className="p-price"> ${price}</h3>

              <button onClick={handleBuyNow} className="site-btn">
                BUY NOW
              </button>
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button
                      className="panel-link active"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      information
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                      <p>
                        Approx length 66cm/26" (Based on a UK size 8 sample)
                      </p>
                      <p>Mixed fibres</p>
                      <p>
                        The Model wears a UK size 8/ EU size 36/ US size 4 and
                        her height is 5'8"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingTwo">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      care details
                    </button>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <img src="./img/cards.png" alt="" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingThree">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      shipping & Returns
                    </button>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <h4>7 Days Returns</h4>
                      <p>
                        Cash on Delivery Available
                        <br />
                        Home Delivery
                        <span>3 - 4 days</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-sharing">
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
