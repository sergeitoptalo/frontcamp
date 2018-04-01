let mongoose = require("mongoose");
const User = require('../server/schema').User;

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET book', () => {
    it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/blogs')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                //res.body.length.should.be.eql(0);
                done();
            });
    });
});
