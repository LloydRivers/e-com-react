module.exports = {
  postOrder: async (req, res) => {
    const {
      cartList,
      address,
      deliveryType,
      total,
      deliveryFee,
      id,
      paymentType,
    } = req.body;
    const { address: street, city, country, postcode } = address;

    const db = req.app.get("db");

    try {
      const order = await db.orders.create_order(
        id,
        paymentType,
        deliveryFee,
        total,
        deliveryType,
        street,
        city,
        country,
        postcode
      );

      const orderId = order[0].id;

      for (let i = 0; i < cartList.length; i++) {
        const { id, quantity } = cartList[i];
        const ordered_products =
          await db.ordered_products.create_ordered_products(
            id,
            quantity,
            orderId
          );
      }
      res.status(200).send({ status: "success", msg: "Order created" });
    } catch (error) {
      console.log(error);
    }
  },
};
