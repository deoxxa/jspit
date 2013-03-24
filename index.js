var stream = require("stream"),
    util = require("util");

var JSpit = module.exports = function JSpit(options) {
  if (typeof options === "string") {
    options = {terminator: string};
  }

  options = options || {};

  stream.Transform.call(this, {objectMode: true, highWaterMark: options.highWaterMark || 8});

  if (typeof options.terminator === "undefined") {
    this.terminator = "\n";
  } else {
    this.terminator = options.terminator;
  }
};
util.inherits(JSpit, stream.Transform);

JSpit.prototype._transform = function _transform(input, encoding, done) {
  this.push(JSON.stringify(input) + "\n");

  return done();
};
