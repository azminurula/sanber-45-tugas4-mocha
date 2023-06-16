const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4NjcyNDM3OX0.Gpi-ssncyrVVKrpaGT410ZqZ-NhQGyxg31FkHyT1xiE"

describe("post /users", function(){
    it ("Create new user, userId is not null, name valid", async function() {
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
        expect(await response.statusCode).to.eql(201)
        expect(await response.body.data.userId).not.to.be.null
        expect(await response.body.data.name).to.be.equal('Manager Pemasaran');
        console.log(response)
    })  
})