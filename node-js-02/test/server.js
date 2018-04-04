let mongoose = require("mongoose");
let Blog = require('../server/schema.js').Blog;
const app = require('../server.js').app;
const routes = require('../server/routes.js');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();
var expect = chai.expect;
var sinon = require('sinon');

chai.use(chaiHttp);

describe('/GET index', () => {
    
    it('it should GET all the blogs for the index page', (done) => {

        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('Blogs', () => {
    describe('/GET blogs', () => {
        it('it should GET all the blogs on the route /blogs', (done) => {
            chai.request(server)
                .get('/blogs')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});

describe('Blog', () => {
    describe('/GET single blog', () => {
        it('it should GET single blog on route /blogs/:id', (done) => {
            chai.request(server)
                .get('/blogs/5ac394fdb41e361198a28ee2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    
                    done();
                });
        });
        after(function () {
            //server.close();
            process.exit(0);
        });
    });
});
