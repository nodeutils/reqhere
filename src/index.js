"use strict";
const path = require("path");
const getDirectory = ()=> {
    const stackTrace = require('stack-trace');
    const trace = stackTrace.get();
    let folderPath = trace[2].getFileName().split(path.sep);
    folderPath.pop();
    folderPath = folderPath.join(path.sep);
    return folderPath + path.sep;
};

const addToPath = (givenPath)=> {
    if (process.env.NODE_PATH === undefined) {
        process.env.NODE_PATH = givenPath;
    } else {
        const join = path.sep === "\\" ? ";" : ":";
        process.env.NODE_PATH = process.env.NODE_PATH + join + givenPath;
    }
};

const refresh = ()=> {
    require("module").Module._initPaths();
};
const add = function () {
    addToPath(getDirectory());
    refresh();
};
module.exports = add;