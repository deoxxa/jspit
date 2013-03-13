var stream = require("stream"),
    util = require("util");

var JSpit = module.exports = function JSpit(terminator) {
  stream.Transform.call(this, {objectMode: true});

  if (typeof terminator === "undefined") {
    this.terminator = "\n";
  } else {
    this.terminator = terminator;
  }
};
util.inherits(JSpit, stream.Transform);

JSpit.prototype._transform = function _transform(input, encoding, done) {
  this.push(JSON.stringify(input) + "\n");

  return done();
};
