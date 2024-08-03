const express = require("express");
const Person = require("../models/Person");
const router = express.Router();

//post
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    //assuming the request body contains the person data
    //create a new person document using the Mongoose model.
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched ");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//list person based on their work type
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched ");
      res.status(200).json({ response });
    } else {
      res.status(404).json({ error: "Invalid work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error " });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedata = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedata, {
      new: true, //return the updates version
      runValidators: true, //run mongoose validation
    });
    //if no id found
    if (!response) {
      console.log("data not found");
      res.status(404).json({ error: "data not found " });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error " });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    //if id not found
    if (!response) {
      console.log("data not found");
      res.status(404).json({ error: "data not found " });
    }
    console.log("data deleted");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
