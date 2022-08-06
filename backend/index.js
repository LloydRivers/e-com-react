require("dotenv").config();
// create express app
const express = require("express");
const app = express();
// Adding MassiveJS
const massive = require("massive");

let PORT = process.env.PORT || 3000;

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
    connectionString: process.env.POSTGRES_URI,
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

app.get("/test", (req, res) => {
  res.send("Connected");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
