let mongoose = require("mongoose");
let Blog = require('../server/schema').Blog;
const app = require('../server').app;
const routes = require('../server/routes');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
var expect = chai.expect;
var sinon = require('sinon');

chai.use(chaiHttp);

describe('/GET index', () => {
    it('it should GET all the blogs', (done) => {

        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                // expect(spy.calledWithMatch(/\/index\.pug$/)).to.be.true;
                //expect(res.render.calledOnce).to.be.true;
                //spy.restore();
                done();
            });
    });
});

describe('Blogs', () => {
    describe('/GET blogs', () => {
        it('it should GET all the blogs', (done) => {
            chai.request(server)
                .get('/blogs')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
        after(function () {
            //server.close();
            process.exit(0);
        });
    });

    it('should throw an error', function (done) {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.body.error.should.eql({ 'error': 'An error has occurred' });
                done();
            });
        /*         getAppStatus(function (err, data) {
                    err.should.be.an.instanceof(Error);
                    done();
                }); */
    });
    after(function () {
        mock.restore();
    });

});
