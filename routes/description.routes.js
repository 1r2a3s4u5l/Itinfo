const {Router} = require('express');
const { getDescriptions, getDescriptionsById, adddescription } = require('../controller/description.controller');

const router=Router()

router.get("/",getDescriptions)
router.get("/:id",getDescriptionsById)
router.post("/",adddescription)


module.exports=router