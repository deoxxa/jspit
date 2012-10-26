#!/usr/bin/env node

var JSpit = require("./index");

var jspit = new JSpit("\n");

jspit.on("data", function(e) {
  process.stdout.write(e);
});

jspit.on("error", function(e) {
  console.log(e);
});

jspit.write({a: "b", c: "d"});
jspit.write({a: "b", c: "d"});
