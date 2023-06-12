const {Router} = require('express');

const router=Router()

const dictionary = require('./dictionary.routes');
const category = require('./category.routes');
const desc = require('./description.routes');

router.use("/api/term",dictionary)
router.use("/api/category",category)
router.use("/api/desc",desc)


module.exports=router