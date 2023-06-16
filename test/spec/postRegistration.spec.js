const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require ("chai").expect;

describe("POST /registration", function(){
    it ("Create new account", async function() {
        const response = await request
                        .post("/registration")
                        .send({
                            "name": "Kids Store",
                            "email": "store.kids0808@gmail.com",
                            "password": "Jualanbaju4n4k"
                         })
        expect(await response.statusCode).to.eql(201)
        console.log(response)
    })   

})