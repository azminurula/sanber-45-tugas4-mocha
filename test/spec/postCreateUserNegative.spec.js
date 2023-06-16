const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYz_Rp54daf77YYYASKFMOOmd"

describe("post /users", function(){
    it ("Invalid auth token", async function() {
        const response = await request
                        .post("/users")
                        .send({
                            "name" : "Manager Pemasaran",
                            "email": "store.kids0808@gmail.com",
                            "password": "Jualanbaju4n4k"
                        })
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(401)
        console.log(response)   
    })  
})