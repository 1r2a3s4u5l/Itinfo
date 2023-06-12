const Dictionary = require("../models/category");

const addcategory = async (req, res) => {
  try {
    const { category_name,parrent_category_id } = req.body;
    const dict = await Dictionary.findOne({
      category: { $regex: category_name, $options: "i" },
    });
    if (dict) {
      return res
        .status(400)
        .send({ message: "Bunday category avval kiritilgan" });
    }
    const newCategory = await Dictionary({
      category_name,
      parrent_category_id,
    });
    await newCategory.save();
    res.status(200).send({ message: "Yangi category qo'shildi" });
  } catch (error) {
    console.error(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Dictionary.find({});

    if (!categories) {
      return res.status(400).send({ message: "Birorta categoryin topilmadi" });
    }
    res.json(categories);
  } catch (error) {
    console.error(error);
  }
};
const getCategoriesById = async (req, res) => {
  try {
    const id = req.params.id;
    const categories = await Dictionary.find({_id: id });

    if (!categories) {
      return res.status(400).send({ message: "Birora category topilmadi" });
    }
    res.json(categories);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  addcategory,
  getCategoriesById,
  getCategories,
};
