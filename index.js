import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express(),
      PORT = 3000;

// establish mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true
});

// body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Express server running on port ${PORT}`)
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
});
