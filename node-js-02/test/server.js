let mongoose = require("mongoose");
let Blog = require('../server/schema.js').Blog;
const app = require('../server.js').app;
const routes = require('../server/routes.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();
var expect = chai.expect;
var sinon = require('sinon');
var assert = require('assert');

chai.use(chaiHttp);

describe('Get index page', () => {
    it('it should send index page', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('Get all blogs', () => {
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

describe('Get single blog', () => {
    it('it should GET single blog on route /blogs/:id', (done) => {
        chai.request(server)
            .get('/blogs/5ac394fdb41e361198a28ee2')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('Add blog', () => {
    it('it should send success message if blog was added', (done) => {
        let blog = {
            title: "title 2",
            author: "author 2",
            text: 'text 2',
            date: new Date()
        }

        chai.request(server)
            .post('/add-blog')
            .send(blog)
            .end((err, res) => {
                res.text.should.be.equal('added');
                done();
            });
    });
    
    after(function () {
        process.exit(0);
    });
});

