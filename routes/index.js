const dailyRouter = require("./daily");
const multidaysRouter = require("./multidays");
const multinutrientsRouter = require("./multinutrients");

const setupRoutes = (app) => {
  // daily routes
  app.use("/api/dailyrecommendation", dailyRouter);
  // multidays routes
  app.use("/api/multidaysrecommendation", multidaysRouter);
  // multinutrientsRouter routes
  app.use("/api/multinutrientsrecommendation", multinutrientsRouter);
};

module.exports = {
  setupRoutes,
};
