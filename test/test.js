"use strict";
const Mocha = require("mocha");
process.setMaxListeners(0);
// create mocha instance and pass options
const mocha = new Mocha({ui: 'bdd', reporter: 'spec'});
const chai = require("chai");
mocha.addFile("./test/index/index.test.js");
mocha.run(function (failures) {
    process.exit(failures);
});
