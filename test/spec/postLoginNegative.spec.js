const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("POST /authentications", function(){
    it ("Failed login, wrong email", async function() {
        const response = await request
                        .post("/authentications")
                        .send({
                            "email": "store.kids@gmail.com",
                            "password": "Jualanbaju4n4k"
                        })
        expect(await response.statusCode).to.eql(401)
        console.log(response)
    })  

})