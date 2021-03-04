const expressLoader = require('./express');
const botLoader = require('./bot');

function init(app, config) {
  expressLoader(app, config.security);
  //botLoader(config);
}

module.exports = {
  init,
};
