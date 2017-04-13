
var microplatform = require("microplatform")
var pkg = require("../package.json")

module.exports = microplatform({
  cmd: "cldflr",
  name: "cldflr platform",
  platform: "cldflr.io",
  version: pkg.version,
  boilerplates: __dirname + "/boilerplates"
})
