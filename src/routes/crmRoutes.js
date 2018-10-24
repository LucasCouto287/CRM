import {addNewContact, getContacts, getContactWithID} from "../controllers/crmController"

const routes = (app) => {
  app.route("/contact")
     .get((req, res, next) => {
       // middleware
       console.log(`Request from: ${req.originalUrl}`)
       console.log(`Request type: ${req.method}`)
       next()
     }, getContacts)
     // POST endpoint
     .post(addNewContact)
// TODO: git commit -m "Create GET endpoint to get specific contact or all contacts"
  app.route("/contact/:contactID")
     // get specific contact based on ID
     .get(getContactWithID)
     // PUT request
     .put((req, res) => {
       res.send("PUT request successful!")
     })
     // DELETE request
     .delete((req, res) => {
       res.send("DELETE request successful!")
     });
};

export default routes;
