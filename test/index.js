"use strict";

var assert = require("assert");
var parse = require("../src");
var path = require("path");

describe("Check if it can parse a clover file", function () {

    it("should parse a normal file", function (done) {

        var filePath = path.join(__dirname, "assets", "clover.xml");

        parse.parseFile(filePath).then(function (result) {
            assert.equal(result.length, 3);
            assert.equal(result[0].functions.found, 1);
            assert.equal(result[0].functions.hit, 1);
            assert.equal(result[0].lines.found, 4);
            assert.equal(result[0].lines.hit, 4);
            assert.equal(result[0].functions.details[0].line, 5);
            assert.equal(result[0].functions.details[0].hit, 2);
            assert.equal(result[0].lines.details[0].line, 6);
            assert.equal(result[0].lines.details[0].hit, 2);
            done();
        }).catch(function (err) {
            assert.equal(err, null);
            done();
        });

    });

    it("should parse a second file", function (done) {

        var filePath = path.join(__dirname, "assets", "clover1.xml");

        parse.parseFile(filePath).then(function (result) {
            assert.equal(result.length, 1);
            assert.equal(result[0].functions.found, 2);
            assert.equal(result[0].functions.hit, 1);
            assert.equal(result[0].lines.found, 4);
            assert.equal(result[0].lines.hit, 1);
            done();
        }).catch(function (err) {
            assert.equal(err, null);
            done();
        });

    });

    it("should parse a file with an empty class", function (done) {

        var filePath = path.join(__dirname, "assets", "clover-empty.xml");

        parse.parseFile(filePath).then(function (result) {
            assert.equal(result.length, 1);
            assert.equal(result[0].functions.found, 0);
            assert.equal(result[0].functions.hit, 0);
            assert.equal(result[0].lines.found, 0);
            assert.equal(result[0].lines.hit, 0);
            done();
        }).catch(function (err) {
            assert.equal(err, null);
            done();
        });

    });

});
