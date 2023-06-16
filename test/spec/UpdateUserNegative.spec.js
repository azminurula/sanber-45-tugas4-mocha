const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjgyMzExOX0.OX2sVI04Tje-Ec-EB8OaLooZvngdIxjJpPBJMgIexfo"

describe("PUT /users/{user_id})", function(){
    it ("Validation name failed", async function() {
        const response = await request
                        .put("/users/1c5f3a0d-96c8-4218-9019-85060d7f5e06")
                        .send({
                            "email": "store.kids0808@gmail.com",                           
                        })
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(400)
        console.log(response)
      });
    })