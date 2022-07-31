const multinutrientRouter = require("express").Router();
const Multinutrients = require("../models/multinutrients");

multinutrientRouter.post("/", (req, res) => {
  const response = Multinutrients.recomendMultinutrients(req.body);
  if (response) {
    return res.send(response);
  } else {
    return res.send(`The server does not work`);
  }
});

module.exports = multinutrientRouter;
