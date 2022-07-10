const context = require.context("../components", true, /\.js$/);
const obj = {};
context.keys().forEach((key) => {
  console.log(key);
  obj[key] = context(key);
});
