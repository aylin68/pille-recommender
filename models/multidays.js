const Micronutrient = require("../Micronutrient.json");
const Daily = require("./daily");

const recomendNDay = (data) => {
  let recomendNDays;
  data.map((item) => {
    switch (item.type) {
      case "zinc":
        recomendNDays = Daily.recommendationZinc(item.zinc, item.days);
        return recomendNDays;
      case "d3":
        recommendationD3(item.d3);
        break;
      case "omega3":
        recommendationOmega3(item.omega3);
        break;
    }
  });
};

module.exports = {
  recomendNDay,
};
