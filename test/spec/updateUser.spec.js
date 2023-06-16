const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczODEzYTIyLWM0NTctNGNkYy05MzE2LWNmNTViYzMwOTYwMSIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjcwODY2M30.cpzhPQQo8PXs-h8yIOoPmvjOuhliS8gcfuXlXDWvp2Y"

describe("PUT /users/{user_id})", function(){
    it ("Update user, make sure user updated", async function() {
        const response = await request
                        .put("/users/1c5f3a0d-96c8-4218-9019-85060d7f5e06")
                        .send({
                            "name" : "Kepala Bagian Gudang",
                            "email": "store.kids0808@gmail.com",
                        })
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(200)

        const data = response.body.data;
        expect(data).to.include.keys("name");
        expect(data.name).to.eql("Kepala Bagian Gudang");
        console.log(response)
      });
    })