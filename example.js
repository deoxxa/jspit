#!/usr/bin/env node

var JSpit = require("./index");

var jspit = new JSpit("\n");

jspit.on("error", function(e) {
  console.log(e);
});

jspit.pipe(process.stdout);

jspit.write({a: "b", c: "d"});
jspit.write({a: "b", c: "d"});
