var agis = require("./agis/BuildTask")

// console.log(agis.tarSharedDir())
// console.log(agis.restoreSharedDir())

function shellScript() {
  return [
    'a',
    'b',
    'c',
  ].join("\n")
}
console.log([
  shellScript(),
  "1"
  ])