"use strict";
describe("index.js", function () {
    const chai = require("chai");
    const expect = chai.expect;
    const requireOne = ()=> {
        return require("one");
    };
    const requireTwo = ()=> {
        return require("two");
    };
    const requireThree = ()=> {
        return require("three");
    };
    it("Should fail to include any items before they're added", function () {
        expect(requireOne).to.throw(Error);
        expect(requireTwo).to.throw(Error);
        expect(requireThree).to.throw(Error);
    });
    it("Should load 'one' once A has been included", function(){
        require("./a/loadA.js");
        expect(requireOne()).to.equal("A1");
        expect(requireThree).to.throw(Error);
    });
    it("Should load 'one', 'two' and 'three' once A and B has been included", function(){
        require("./a/loadA.js");
        require("./b/loadB.js");
        expect(requireOne()).to.equal("A1");
        expect(requireTwo()).to.equal("A2");
        expect(requireThree()).to.equal("B3");
    });
});