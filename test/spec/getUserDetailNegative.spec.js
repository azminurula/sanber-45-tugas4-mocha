const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4Njc5ODkyMX0.tuv7FqrI3EopzudwYtBEWNlMNzPD2vcTr28P6mWZzRc"

describe("get /users/{user_id})", function(){
    it ("User not found", async function() {
        const response = await request
                        .get("/users/avasjc9-f533-413e-b2a9-888DKAmao")
                        .set({
                            Authorization : AUTH,
                            Accept :"application/json"
                        })
        expect(await response.statusCode).to.eql(404)
        console.log(response)
    })  
})
