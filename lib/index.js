"use strict";

var path = require("path");
var getDirectory = function getDirectory() {
    var stackTrace = require('stack-trace');
    var trace = stackTrace.get();
    var folderPath = trace[2].getFileName().split(path.sep);
    folderPath.pop();
    folderPath = folderPath.join(path.sep);
    return folderPath + path.sep;
};

var addToPath = function addToPath(givenPath) {
    if (process.env.NODE_PATH === undefined) {
        process.env.NODE_PATH = givenPath;
    } else {
        var join = path.sep === "\\" ? ";" : ":";
        process.env.NODE_PATH = process.env.NODE_PATH + join + givenPath;
    }
};

var refresh = function refresh() {
    require("module").Module._initPaths();
};
var add = function add() {
    addToPath(getDirectory());
    refresh();
};
module.exports = add;