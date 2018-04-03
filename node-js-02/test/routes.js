

/*let mongoose = require("mongoose");
const User = require('../server/schema').User;

var supertest = require('supertest')
var express = require('express')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
var expect = chai.expect;


chai.use(chaiHttp);

var app = require('../server');
var assert = require("assert");
var request = chai.request();


describe("GET /blogs", function () {
    it("should send an array with blogs", function (done) {
        chai.request(app)
            .get('/blogs')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(4);
                done();
                request.close()
            });
    });
    after(function () {
        //server.close();
        process.exit(0);
    });
});*/

