const Micronutrient = require("../Micronutrient.json");
const Daily = require("./daily");

const recomendMultinutrients = (d3, omega3) => {
  let amountOfD31000 = Daily.calculateAmountOfMicronutrient("d3", d3, "1000iu");
};

module.exports = {
  recomendMultinutrients,
};
