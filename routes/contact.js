const express = require("express");

const router = express.Router();

const Contact = require("../models/contact");

//post contact

//@ POST method
//@desc post a contact
//@ path : http://localhost:5000/api/contact
//@ params Body

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    if (!req.email.body) {
      res.status(400).send({ msg: "email is required" });
      return;
    }
    const response = await newContact.save();
    res.send(response);
  } catch (error) {
    res.status(400).send({ msg: "cannot save it" });
  }
});

//@ GET method
//@desc get all contacts
//@ path : http://localhost:5000/api/contact

router.get("/", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ reponse: result, msg: "getting contacts successfully" });
  } catch (error) {
    res.statut(400).send({ msg: "cannot get contacts" });
  }
});

//@ DELETE method
//@desc delete a contact by id
//@ path : http://localhost:5000/api/contact/:id
//@ params id

router.delete("/:id", async (req, res) => {
  try {
    const reuslt = await Contact.deleteOne({ _id: req.params.id });
  } catch (error) {
    res.send("contact is already deleted");
  }
});

//@ PUT method
//@desc update a contact by id
//@ path : http://localhost:5000/api/contact/:id
//@ params id Body

router.put("/:id", async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("updated");
  } catch (error) {
    res.status(400).send(" not updated");
  }
});

module.exports = router;
