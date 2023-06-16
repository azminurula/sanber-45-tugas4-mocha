const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczODEzYTIyLWM0NTctNGNkYy05MzE2LWNmNTViYzMwOTYwMSIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjcwODY2M30.cpzhPQQo8PXs-h8yIOoPmvjOuhliS8gcfuXlXDWvp2Y"

describe("DELETE /users/{user_id})", function(){
    it ("Delete user", async function() {
        const response = await request
                        .delete("/users/73813a22-c457-4cdc-9316-cf55bc309601")
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(200)
        console.log(response)
    })  
})