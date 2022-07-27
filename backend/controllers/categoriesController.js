module.exports = {
  getCategories: async (req, res) => {
    //get DB variable
    const db = req.app.get("db"); //To get reference to the db folder

    try {
      const categories = await db.categories.fetch_categories();
      res.status(200).send(categories);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
