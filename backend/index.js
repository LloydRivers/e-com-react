// create express app
const express = require("express");
const app = express();
// Adding MassiveJS
const massive = require("massive");
require("dotenv").config();
let { POSTGRES_URI, PORT } = process.env;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const {
  getProducts,
  getSpecificProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers/productController");

const { getCategories } = require("./controllers/categoriesController");

const {
  createUser,
  login,
  getUserDetails,
} = require("./controllers/userController");

const { postOrder } = require("./controllers/ordersController");

massive(
  {
    connectionString: POSTGRES_URI,
    ssl: { rejectUnauthorized: false },
  },
  {
    scripts: "./db",
  }
)
  .then((db) => {
    app.set("db", db);
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("DB Connection Failed!");
  });

/*PRODUCTS*/
app.get("/getProducts", getProducts);
app.get("/getSpecificProduct/:id", getSpecificProduct);
app.post("/createProduct", createProduct);
app.delete("/deleteProduct/:id", deleteProduct);
app.put("/updateProduct/:id", updateProduct);

/****************************************/
/****************************************/
/****************************************/

/*USERS*/
app.get("/userDetails/:id", getUserDetails);
app.post("/register", createUser);
app.post("/login", login);

/****************************************/

/****************************************/

/*CATEGORIES*/
app.get("/categories", getCategories);

/****************************************/

/*ORDERS*/
app.post("/placeOrder", postOrder);

app.listen((PORT = 5000), () => {
  console.log(`Server running on port ${PORT}`);
});
