const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    // res.send({ status: "success", message: "Login Successful" });
    try {
      const { email, password } = req.body;
      const db = req.app.get("db");
      const user = await db.users.find_one_by_email(email);
      console.log(user);

      const singleUser = user[0];
      if (singleUser) {
        const isMatch = await bcrypt.compare(password, singleUser.password);
        console.log(isMatch);

        if (isMatch) {
          const token = jwt.sign(
            {
              id: singleUser.id,
              name: singleUser.name,
              email: singleUser.email,
            },
            "secret"
          );
          res.status(200).send({
            status: "success",
            message: "user logged in successfully",
            token,
          });
        } else {
          res
            .status(200)
            .send({ status: "error", message: "Invalid credentials" });
        }
      } else {
        res.status(200).send({ message: "User not found", status: "error" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  createUser: async (req, res) => {
    // res.json(req.body);
    const db = req.app.get("db");
    const {
      name,
      surname,
      email,
      password,
      telephone,
      address,
      city,
      country,
      postcode,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await db.users.create_user(
        name,
        surname,
        email,
        hashedPassword,
        telephone,
        address,
        city,
        country,
        postcode
      );
      res.status(200).send({ status: "success", msg: "User created" });
    } catch (error) {
      console.log(error);
      res.status(200).send({ status: "error", msg: "User not created" });
    }
  },
  getUserDetails: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { id } = req.params;
      const user = await db.users.get_user_details(id);
      res.status(200).send(user[0]);
    } catch (error) {
      console.log(error);
    }
  },
};
