const dailyRouter = require("express").Router();
const Daily = require("../models/daily");

dailyRouter.post("/", (req, res) => {
  const response = Daily.recommendation(req.body);
  console.log(response);
  if (response) {
    return res.status(200).send(response);
  } else {
    return res.status(500).send(`The server does not work`);
  }
});
module.exports = dailyRouter;
