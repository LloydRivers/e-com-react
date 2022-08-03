module.exports = {
  postOrder: async (req, res) => {
    const { cartList, address, deliveryType, total, deliveryFee, paymentType } =
      req.body;

    const { address: street, city, country, postcode } = address;
    console.log(street, city, country, postcode);

    const db = req.app.get("db");

    try {
    } catch (error) {
      console.log(error);
    }
  },
};
