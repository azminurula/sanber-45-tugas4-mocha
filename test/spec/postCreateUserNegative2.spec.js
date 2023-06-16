const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjgxMDE3OH0.iTciWqqgh59Glc7gpEGB_zzgcf13r7l9p22jvcEuHzk"

describe("post /users", function(){
    it ("Empty data", async function() {
        const response = await request
                        .post("/users")
                        .send({
                            "name" : "",
                            "email": "store.kids0808@gmail.com",
                            "password": "Jualanbaju4n4k"
                        })
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(400)
        console.log(response)   
    })  
})