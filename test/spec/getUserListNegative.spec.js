const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4Njg4MjM2N30.58w1P5uxM0TiKBn1ik1ZYLgvovG32SPIsBwLi0jOsuk"

describe("GET /users)", function(){
    it ("Get invalid user name list", async function() {
        const query1 = "1"
        const query2 = "Kasir-Toko&"
        const response = await request
                        .get("/users?q="+query2+"p="+query1)
                        .set({
                            Authorization : AUTH,
                        })
       expect(await response.statusCode).to.eql(200);
    })  
})