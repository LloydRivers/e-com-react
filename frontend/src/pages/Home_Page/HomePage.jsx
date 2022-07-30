import React, { useEffect, useState } from "react";
import { ProductCard } from "components";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCategories,
  fetchCategories,
} from "../../Redux/slices/CategoriesSlice/categoriesSlice";

import {
  fetchProducts,
  selectLoading,
  selectIsError,
  selectErrorMessage,
  selectFilterProducts,
  filterProductByCategory,
} from "../../Redux/slices/ProductSlices/productsSlice";

const HomePage = () => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [expanded, setExpanded] = useState(false);

  const products = useSelector(selectFilterProducts);

  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  const showMore = () => {
    if (itemsToShow === 8) {
      setItemsToShow(products.length);
      setExpanded(true);
    } else {
      setItemsToShow(8);
      setExpanded(false);
    }
  };

  const categoryBasedData = (id) => {
    dispatch(filterProductByCategory(id));
  };
  return (
    <>
      <section className="features-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="/img/icons/1.png" alt="#" />
                </div>
                <h2>Fast Secure Payments</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="/img/icons/2.png" alt="#" />
                </div>
                <h2>Premium Products</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="/img/icons/3.png" alt="#" />
                </div>
                <h2>Free & fast Delivery</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>BROWSE TOP SELLING PRODUCTS</h2>
          </div>
          <ul className="product-filter-menu">
            <li>
              <button onClick={() => categoryBasedData(0)}>ALL</button>
            </li>
            {categories &&
              categories.map((category, index) => (
                <li key={index}>
                  <button onClick={() => categoryBasedData(category.id)}>
                    {category.category_name}
                  </button>
                </li>
              ))}
          </ul>
          <div className="row">
            {products.slice(0, itemsToShow).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center pt-5">
            <button onClick={showMore} className="site-btn sb-line sb-dark">
              {expanded ? "SHOW LESS" : "SHOW MORE"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
