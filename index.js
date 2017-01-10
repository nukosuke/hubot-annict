"use strict";
var fs   = require("fs");
var path = require("path");

module.exports = (robot) => {
  const scripts = path.resolve(__dirname, 'scripts');

  fs.exists(scripts, (exists) => {
    if (exists) {
      fs.readdirSync(scripts).forEach(file => robot.loadFile(scripts, file));
    }
  });
};
