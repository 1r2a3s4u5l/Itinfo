const Description = require("../models/description");

const adddescription = async (req, res) => {
  try {
    const { description,category } = req.body;
    const desc = await Description.findOne({
      description: { $regex: description, $options: "i" },
    });
    if (desc) {
      return res
        .status(400)
        .send({ message: "Bunday description avval kiritilgan" });
    }
    const newDescription = await Description({
      description,
      category,
    });
    await newDescription.save();
    res.status(200).send({ message: "Yangi description qo'shildi" });
  } catch (error) {
    console.error(error);
  }
};

const getDescriptions = async (req, res) => {
  try {
    const descriptions = await Description.find({});

    if (!descriptions) {
      return res.status(400).send({ message: "Birorta descriptionin topilmadi" });
    }
    res.json(descriptions);
  } catch (error) {
    console.error(error);
  }
};
const getDescriptionsById = async (req, res) => {
  try {
    const id = req.params.id;
    const descriptions = await Description.find({_id: id });

    if (!descriptions) {
      return res.status(400).send({ message: "Birora description topilmadi" });
    }
    res.json(descriptions);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  adddescription,
  getDescriptionsById,
  getDescriptions,
};
