const request = require("supertest")("https://airportgap.dev-tester.com/api");
const expect = require("chai").expect;

describe("POST /favorites", function () {
  it("requires authentication", async function () {
    const response = await request.post("/favorites").send({
      airport_id: "JFK",
      note: "My usual layover when visiting family",
    });

    expect(response.status).to.eql(401);
  });
});