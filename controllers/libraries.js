// Library online file as "database" (/librarylist.js)
var lib = require('../librarylist');

// findAll (runs if no parameter is set)
exports.findAll = function(req, res){
  res.send(lib.libraries);
};

// findByName (runs if a search parameter is set)
exports.findByParam = function(req, res) {
  // search param
  var query = req.params.query.toLowerCase();
  //filter results (same as in the react app)
  libraries = lib.libraries.filter(lib => lib.name.toLowerCase().indexOf(query) >= 0);
  res.send(libraries);
};
