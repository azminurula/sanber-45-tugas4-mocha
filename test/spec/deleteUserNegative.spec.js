const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjczNDA2NH0.X-91gC_g5dJAkParqhmgF5-tmzsHQC7Sphk9wWnh0hk"

describe("DELETE /users/{user_id})", function(){
    it ("Delete invalid id user", async function() {
        const response = await request
                        .delete("/users/73813a22-c457-4cdc-931623")
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(404)
        console.log(response)
    })  
})