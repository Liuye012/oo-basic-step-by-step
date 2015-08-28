"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_1");


describe("person", function () {
  it("person column", function () {

    var person = new Person('WangNing', 21);
    var person_name = person.name;
    var person_age = person.age;

    var expect_name = 'WangNing';
    var expect_age = 21;

    expect(expect_name).to.equal(person_name);
    expect(expect_age).to.equal(person_age);
  });
  it("person function introduce", function () {
   var person1=new Person('Tom',21)
    var result=person1.introduce();

    var expect_string='My name is Tom. I am 21 years old.';
    expect(expect_string).to.equal(result);
  })
});