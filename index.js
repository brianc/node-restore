var saved = {};
var apply = function(to, from) {
  Object.keys(from).forEach(function(key) {
    to[key] = from[key];
  });
};
module.exports = function(obj) {
  if(saved[obj]) {
    apply(obj, saved[obj]);
    return;
  }
  saved[obj] = {};
  apply(saved[obj], obj);
};
