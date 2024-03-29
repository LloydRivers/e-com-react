import React, { useState, useEffect } from "react";
import "./adding-product.css";
import axios from "axios";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    brandName: "",
    color: "",
    imageUrl: "https://",
    name: "",
    price: "",
    category_id: null,
  });

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/createProduct`,
        product
      );
      if (data.status === "success") {
        setProduct({
          brandName: "",
          color: "",
          imageUrl: "https://",
          name: "",
          price: "",
          category_id: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my_container">
      <div className="title">
        <h2>Create a new product</h2>
      </div>
      <div className="d-flex">
        <form onSubmit={createProduct} action="" method="">
          <label>
            <span className="brandName">Brand name:</span>
            <input
              className="admin-input "
              value={product.brandName}
              onChange={(event) =>
                setProduct({
                  ...product,
                  brandName: event.target.value,
                })
              }
              type="text"
              name="brandName"
            />
          </label>
          <label>
            <span className="color">Color:</span>
            <input
              className="admin-input "
              value={product.color}
              onChange={(event) =>
                setProduct({
                  ...product,
                  color: event.target.value,
                })
              }
              type="text"
              name="color"
            />
          </label>
          <label>
            <span className="fname">Image:</span>
            <input
              className="admin-input "
              value={product.imageUrl}
              onChange={(event) =>
                setProduct({
                  ...product,
                  imageUrl: event.target.value,
                })
              }
              type="text"
              name="fname"
            />
          </label>
          <label>
            <span className="fname">Name:</span>
            <input
              className="admin-input "
              value={product.name}
              onChange={(event) =>
                setProduct({
                  ...product,
                  name: event.target.value,
                })
              }
              type="text"
              name="fname"
            />
          </label>
          <label>
            <span>Price:</span>
            <input
              className="admin-input "
              value={product.price}
              onChange={(event) =>
                setProduct({
                  ...product,
                  price: event.target.value,
                })
              }
              type="text"
              name="fname"
            />
          </label>
          <label htmlFor="category_id">
            <span>Category ID:</span>
            <input
              className="admin-input"
              value={product.category_id}
              onChange={(event) =>
                setProduct({
                  ...product,
                  category_id: event.target.value,
                })
              }
              type="number"
              required
              name="category_id"
            />
          </label>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
