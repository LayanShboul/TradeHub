const express = require("express");
const router =express.Router();

router.get('/data' ,(req,res)=>
{
try{

    res.send([global.collection, global.itemsCategories]);
}
catch(error){
console.error(error.message);
res.send("Server error");
}
})

module.exports= router;