import mongoose from "mongoose";
import {ContactSchema} from "../models/crmModel"

const Contact = mongoose.model("Contacts", ContactSchema)

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contactInfo) => {
    err ? res.send(err) : res.json(contactInfo)
  });
}
