const Micronutrient = require("../Micronutrient.json");

const findAvailableOfMicronutrient = (type, weight) => {
  let availableOfMicronutrient;
  Micronutrient.filter((item) => {
    if (item.type === type && item.weight === weight) {
      availableOfMicronutrient =
        (parseInt(item.weight) * parseInt(item.available)) / 100;
      return availableOfMicronutrient;
    }
  });
  return availableOfMicronutrient;
};

const calculateAmountOfMicronutrient = (type, amount, weight) => {
  const amountOfMicronutrient =
    Math.ceil(amount) / findAvailableOfMicronutrient(type, weight);
  return amountOfMicronutrient;
};

const recommendationZinc = (zinc, days) => {
  let recommend;
  zinc = zinc * days;
  let amountOfZink50 = Math.floor(
    calculateAmountOfMicronutrient("zinc", zinc, "50mg")
  );
  if (
    Math.ceil(zinc) % 5 === 0 ||
    zinc >= findAvailableOfMicronutrient("zinc", "50mg")
  ) {
    if (Math.ceil(zinc) % 5 === 0) {
      recommend =
        days > 1
          ? `you should take ${amountOfZink50}, 50mg zinc once in ${days} days`
          : `you should take ${amountOfZink50}, 50mg zinc daily`;
      return recommend;
    }
    if (Math.ceil(zinc) % 3 === 0 || Math.floor(zinc) % 3 === 0) {
      let amountOfZink30 = Math.floor(
        calculateAmountOfMicronutrient("zinc", zinc, "30mg")
      );
      recommend =
        days > 1
          ? `you should take ${amountOfZink30}, 30mg zinc once in ${days} days`
          : `you should take ${amountOfZink30}, 30mg zinc daily`;
      return recommend;
    }
    let x = findAvailableOfMicronutrient("zinc", "50mg") * amountOfZink50;
    let y = zinc - x;
    y = Math.ceil(y);
    if (y >= findAvailableOfMicronutrient("zinc", "22mg")) {
      let amountOfZink22 = Math.floor(
        calculateAmountOfMicronutrient("zinc", y, "22mg")
      );
      recommend =
        days > 1
          ? `you should take ${amountOfZink50}, 50mg and ${amountOfZink22}, 22mg zinc once in ${days} days`
          : `you should take ${amountOfZink50}, 50mg and ${amountOfZink22}, 22mg zinc daily`;
      return recommend;
    } else if (y >= findAvailableOfMicronutrient("zinc", "30mg")) {
      let amountOfZink30 = Math.floor(
        calculateAmountOfMicronutrient("zinc", y, "30mg")
      );
      recommend =
        days > 1
          ? `you should take ${amountOfZink50}, 50mg and ${amountOfZink30}, 30mg zinc once in ${days} days`
          : `you should take ${amountOfZink50}, 50mg and ${amountOfZink30}, 30mg zinc daily`;
      return recommend;
    } else {
      recommend =
        days > 1
          ? `you should take ${amountOfZink50}, 50mg zinc once in ${days} days`
          : `you should take ${amountOfZink50}, 50mg zinc daily`;
      return recommend;
    }
  }

  if (zinc >= findAvailableOfMicronutrient("zinc", "22mg")) {
    let amountOfZink22 = Math.floor(
      calculateAmountOfMicronutrient("zinc", zinc, "22mg")
    );
    let x = findAvailableOfMicronutrient("zinc", "22mg") * amountOfZink22;
    let y = zinc - x;
    y = Math.ceil(y);
    if (y >= findAvailableOfMicronutrient("zinc", "30mg")) {
      let amountOfZink30 = Math.floor(
        calculateAmountOfMicronutrient("zinc", y, "30mg")
      );
      recommend =
        days > 1
          ? `you should take ${amountOfZink30}, 30mg zinc once in ${days} days`
          : `you should take ${amountOfZink30}, 30mg zinc daily`;
      return recommend;
    } else {
      recommend =
        days > 1
          ? `you should take ${amountOfZink22}, 22mg zinc once in ${days} days`
          : `you should take ${amountOfZink22}, 22mg zinc daily`;
      return recommend;
    }
  }
  /////if zinc < 2 ////
  if (zinc <= findAvailableOfMicronutrient("zinc", "22mg")) {
    recommend =
      days > 1
        ? `you should take 1, 30mg zinc once in ${days} days`
        : `you should take 1, 30mg zinc daily`;
    return recommend;
  }
};

const recommendationD3 = (d3, days) => {
  let recommend;
  d3 = d3 * days;
  let amountOfD33000 = Math.round(
    calculateAmountOfMicronutrient("d3", d3, "3000iu")
  );
  if (d3 > findAvailableOfMicronutrient("d3", "1000iu") + 520) {
    amountOfD33000 = amountOfD33000 === 0 ? 1 : amountOfD33000;
    let amountOfD31000 = Math.round(
      calculateAmountOfMicronutrient("d3", d3, "1000iu")
    );
    if (Math.ceil(d3) % 1000 === 0) {
      recommend =
        days > 1
          ? `you should take ${amountOfD31000}, 1000iu D3 once in a week`
          : `you should take ${amountOfD31000}, 1000iu D3 once in a week`;
      return recommend;
    }
    let x = findAvailableOfMicronutrient("d3", "3000iu") * amountOfD33000;
    let y = d3 - x;
    y = y <= 0 ? -1 * y : y;
    y = Math.ceil(y);

    if (y >= 700) {
      let amountOfD31000 = Math.round(
        calculateAmountOfMicronutrient("d3", y, "1000iu")
      );
      amountOfD31000 = amountOfD31000 === 0 ? 1 : amountOfD31000;
      recommend =
        days > 1
          ? `you should take ${amountOfD33000}, 3000iu and ${amountOfD31000}, 1000iu D3 once in a week`
          : `you should take ${amountOfD33000}, 3000iu and ${amountOfD31000}, 1000iu D3 once in a week`;
      return recommend;
    } else {
      recommend =
        days > 1
          ? `you should take ${amountOfD33000}, 3000iu D3 once in a week`
          : `you should take ${amountOfD33000}, 3000iu D3 once in a week`;
      return recommend;
    }
  }
  /// 520 = 1000*30/100 + 1000*78/100
  if (d3 <= findAvailableOfMicronutrient("d3", "1000iu") + 520) {
    recommend =
      days > 1
        ? `you should take 1, 1000iu D3 once in a week`
        : `you should take 1, 1000iu D3 once in a week`;
    return recommend;
  }
};

const recommendationOmega3 = (omega3, days) => {
  omega3 = omega3 * days;
  let amountOfOmega31400mg = Math.round(
    calculateAmountOfMicronutrient("omega3", omega3, "1400mg")
  );
  if (findAvailableOfMicronutrient("omega3", "1400mg") - 400 <= omega3) {
    amountOfOmega31400mg =
      amountOfOmega31400mg === 0 ? 1 : amountOfOmega31400mg;
    let x =
      findAvailableOfMicronutrient("omega3", "1400mg") * amountOfOmega31400mg;
    let y = omega3 - x;
    y = Math.ceil(y);
    if (y >= 400) {
      let amountOfOmega3750mg = Math.round(
        calculateAmountOfMicronutrient("omega3", y, "750mg")
      );
      amountOfOmega3750mg = amountOfOmega3750mg === 0 ? 1 : amountOfOmega3750mg;
      recommend =
        days > 1
          ? `you should take ${amountOfOmega31400mg}, 1400mg and ${amountOfOmega3750mg}, 750mg omega3 once in a week`
          : `you should take ${amountOfOmega31400mg}, 1400mg and ${amountOfOmega3750mg}, 750mg omega3 once in a week`;
      return recommend;
    } else {
      recommend =
        days > 1
          ? `you should take ${amountOfOmega31400mg}, 1400mg omega3 once in a week`
          : `you should take ${amountOfOmega31400mg}, 1400mg omega3 once in a week`;
      return recommend;
    }
  }
  if (omega3 <= findAvailableOfMicronutrient("omega3", "750mg") + 250) {
    recommend =
      days > 1
        ? `you should take 1, 750mg omega3 once in a week`
        : `you should take 1, 750mg omega3 once in a week`;
    return recommend;
  }
};

const recommendation = (data) => {
  let recomendMicronutrient = [];
  data.map((item) => {
    switch (item.type) {
      case "zinc":
        return recomendMicronutrient.push(
          recommendationZinc(item.zinc, item.days)
        );

      case "d3":
        return recomendMicronutrient.push(recommendationD3(item.d3, item.days));

      case "omega3":
        return recomendMicronutrient.push(
          recommendationOmega3(item.omega3, item.days)
        );
    }
  });
  return recomendMicronutrient;
};

module.exports = {
  recommendation,
  recommendationZinc,
  calculateAmountOfMicronutrient,
  findAvailableOfMicronutrient,
};
