const request = require("supertest");
const app = require("./app");
const Daily = require("./models/daily");

describe("Test daily API", () => {
  test("POST /api/dailyrecommendation/", (done) => {
    request(app)
      .post("/api/dailyrecommendation/")
      .expect("Content-Type", /json/)
      .send([
        {
          days: 1,
          type: "zinc",
          zinc: 3,
        },
        {
          days: 1,
          type: "d3",
          d3: 3000,
        },
        {
          days: 1,
          type: "omega3",
          omega3: 1500,
        },
      ])
      .expect(200)
      .expect((res) => {
        res.body[0] = "you should take 1, 30mg zinc daily";
        res.body[1] = "you should take 1, 3000iu D3 once in a week";
        res.body[2] = "you should take 1, 1400mg omega3 once in a week";
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
