import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express(),
      PORT = 3000;

routes(app);

app.get("/", (req, res) => {
  res.send(`Express server running on port ${PORT}`)
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
});
