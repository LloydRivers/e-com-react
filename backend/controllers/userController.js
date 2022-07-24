const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const db = req.app.get("db");
      const user = await db.users.find_one_by_email(email);

      const singleUser = user[0];

      if (!user) {
        return res
          .status(400)
          .send({ message: "User not found", status: "error" });
      }
      /////
      console.log(`Password: ${password}`);
      console.log(`User password: ${singleUser.password}`);
      console.log(user);

      const isMatch = await bcrypt.compare(password, singleUser.password);
      console.log(isMatch);
      if (!isMatch) {
        return res
          .status(200)
          .send({ status: "error", message: "Invalid credentials" });
      }

      return res
        .status(200)
        .send({ status: "success", message: "Login successful" });

      // const payload = {
      //   id: user.id,
      //   name: user.name,
      //   email: user.email,
      // };
      // jwt.sign(
      //   payload,
      //   process.env.JWT_SECRET,
      //   { expiresIn: 3600 },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.status(200).send({
      //       status: "success",
      //       message: "user logged in successfully",
      //       token,
      //     });
      //   }
      // );
    } catch (error) {}
  },
  createUser: async (req, res) => {
    const db = req.app.get("db");
    const { name, surname, password, telephone, email, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("post user controller");

    try {
      const user = await db.users.create_user(
        name,
        surname,
        email,
        hashedPassword,
        telephone,
        address
      );
      console.log("User Added!");
      res.status(200).send({ status: "success", msg: "User created" });
    } catch (error) {
      console.log(error);
      res.status(200).send({ status: "error", msg: "User not created" });
    }
  },
};
