const express = require('express');
const router = express.Router();

// GET
router.get('/',(req,res)=>{
    res.render('index',{title:'node express'});
});

module.exports = router;