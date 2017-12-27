module.exports = function(app){

  // Library controller
  var libraries = require('./controllers/libraries');
  // Route to if no parameter in request is set
  app.get('/libraries', libraries.findAll);
  // Route to if library search parameter in request is set
  app.get('/libraries/:query', libraries.findByParam);
}
