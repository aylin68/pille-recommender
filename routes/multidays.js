const multidaysRouter = require("express").Router();
const Multidays = require("../models/multidays");

//multidaysRouter.post("/", (req, res) => {});

multidaysRouter.post("/", (req, res) => {
  /* const { zink, days } = req.body;
  z = zink * days; */
  const response = Multidays.recomendNDay(req.body);
  if (response) {
    return res.send(response);
  } else {
    return res.send(`The server does not work`);
  }
});

module.exports = multidaysRouter;
