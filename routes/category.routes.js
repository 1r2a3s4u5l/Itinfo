const {Router} = require('express');
const { getCategories, getCategoriesById, addcategory } = require('../controller/category.controller');

const router=Router()

router.get("/",getCategories)
router.get("/:id",getCategoriesById)
router.post("/",addcategory)


module.exports=router