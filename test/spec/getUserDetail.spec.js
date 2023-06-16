const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjczNTc0MH0.DYxQIYp0mH51fDAHn6D1E-TTJNM4FiqhsgbQMalIAuk"

describe("get /users/{user_id})", function(){
    it ("Get User Detail, make sure get valid data", async function() {
        const response = await request
                        .get("/users/ab5f0e86-f533-413e-b2a9-51cae4a16159")
                        .set({
                            Authorization : AUTH,
                            Accept :"application/json"
                        })
        expect(await response.statusCode).to.eql(200)
        expect(await response.body.data.user.id).to.be.equal('ab5f0e86-f533-413e-b2a9-51cae4a16159')
        expect(await response.body.data.user.name).to.be.equal('Staff Pemasaran')
        expect(await response.body.data.user.email).to.be.equal('store.kids0808@gmail.com')
        expect(await response.body.data.user.role).to.be.equal('kasir')
        console.log(response)
    })  
})