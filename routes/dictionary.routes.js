const {Router} = require('express');
const { getTerms, addterm, getTermsById, getTermsByLetter, getTermsByTerm } = require('../controller/dictionary.controller');

const router=Router()

router.get("/",getTerms)
router.get("/:id",getTermsById)
router.get("/letter/:letter",getTermsByLetter)
router.get("/term/:term",getTermsByTerm)
router.post("/",addterm)


module.exports=router