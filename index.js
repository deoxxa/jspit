var Steez = require("steez"),
    util = require("util");

var JSpit = module.exports = function JSpit(terminator) {
  Steez.call(this);

  if (typeof terminator === "undefined") {
    this.terminator = "\n";
  } else {
    this.terminator = terminator;
  }
};
util.inherits(JSpit, Steez);

JSpit.prototype.write = function write(data) {
  this.emit("data", JSON.stringify(data) + this.terminator);

  return !this.paused && this.writable;
};
