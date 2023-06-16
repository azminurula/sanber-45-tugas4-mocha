const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("POST /authentications", function(){
    it ("Login Account", async function() {
        const response = await request
                        .post("/authentications")
                        .send({
                            "email": "store.kids0808@gmail.com",
                            "password": "Jualanbaju4n4k"
                        })
        expect(await response.statusCode).to.eql(201)
        console.log(response)
    })  

})