var template = require('./template.marko');

module.exports = function(req, res) {
  template.render({
    message: 'All your base are belong to us.'
  }, res);
}