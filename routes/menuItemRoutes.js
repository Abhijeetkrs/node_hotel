const express = require('express');
const MenuItem = require('../models/MenuItem');
const router  = express.Router();

//  post
router.post('/', async(req,res) => {
    try{
        const data = req.body;
        const newMenuItem  = new MenuItem(data);
        const response = await newMenuItem.save()
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//get
router.get('/', async(req,res) => {
    try{
        const response = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal serval error"});
    }
});

router.get('/:taste', async(req,res) => {
    try{
    const tasteType = req.params.taste;
    if(tasteType == 'sweet' || tasteType =='sour' || tasteType=='spicy'){
        const response = await MenuItem.find({taste: tasteType});
        console.log("data fetched ");
        res.status(200).json(response);
    }
    else{
        res.status(404).json({error: 'Internal server error '});
    }
   }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
   }
});



module.exports = router;