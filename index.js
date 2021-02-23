const authentication = require('./authentication');
const getImageCreate = require('./creates/get_image.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: { [getImageCreate.key]: getImageCreate },
};
