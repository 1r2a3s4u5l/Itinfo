const Dictionary = require("../models/dictionary");

const addterm = async (req, res) => {
  try {
    const { term } = req.body;
    const dict = await Dictionary.findOne({
      term: { $regex: term, $options: "i" },
    });
    if (dict) {
      return res
        .status(400)
        .send({ message: "Bunday termin avval kiritilgan" });
    }
    const newTerm = await Dictionary({
      term,
      letter: term[0],
    });
    await newTerm.save();
    res.status(200).send({ message: "Yangi termin qo'shildi" });
  } catch (error) {
    console.error(error);
  }
};

const getTermsByLetter = async (req, res) => {
  try {
    const letter = req.params.letter;
    const terms = await Dictionary.find({ letter:letter });

    if (!terms) {
      return res.status(400).send({ message: "Birorta termin topilmadi" });
    }
    res.json(terms);
  } catch (error) {
    console.error(error);
  }
};
const getTerms = async (req, res) => {
  try {
    const terms = await Dictionary.find({});

    if (!terms) {
      return res.status(400).send({ message: "Birorta termin topilmadi" });
    }
    res.json(terms);
  } catch (error) {
    console.error(error);
  }
};
const getTermsById = async (req, res) => {
  try {
    const id = req.params.id;
    const terms = await Dictionary.find({_id: id });

    if (!terms) {
      return res.status(400).send({ message: "Birorta termin topilmadi" });
    }
    res.json(terms);
  } catch (error) {
    console.error(error);
  }
};
const getTermsByTerm = async (req, res) => {
  try {
    const term = req.params.term;
    const terms = await Dictionary.find({ term:term });

    if (!terms) {
      return res.status(400).send({ message: "Birorta termin topilmadi" });
    }
    res.json(terms);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  addterm,
  getTermsByLetter,
  getTermsById,
  getTerms,
  getTermsByTerm,
};
