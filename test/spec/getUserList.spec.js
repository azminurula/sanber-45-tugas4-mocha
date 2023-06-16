const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjNWYzYTBkLTk2YzgtNDIxOC05MDE5LTg1MDYwZDdmNWUwNiIsImNvbXBhbnlJZCI6IjZhMGJjMjUzLTk0NTAtNDhmNi1iZmI4LWU1MmU1NThmZWY0NyIsImlhdCI6MTY4Njc5ODkyMX0.tuv7FqrI3EopzudwYtBEWNlMNzPD2vcTr28P6mWZzRc"

describe("GET /users)", function(){
    it ("returns user page 1, total data is 5,  check data by id to 3, check data by name to 4", async function() {
        const query1 = "1"
        const response = await request
                        .get("/users?p="+query1)
                        .set({
                            Authorization : AUTH,
                        })
        expect(await response.statusCode).to.eql(200);
       expect(await response.body.data.users.length).to.equal(5);
       expect(await response.body.data.users[3].id).to.equal('7a59d7a6-a816-45c6-89c2-68f2c0b9c459');
       expect(await response.body.data.users[4].name).to.equal('Staff Pemasaran');
       console.log(response)
    })  

})