/**
 *  Grab our required modules
 */
const path = require('path');

/**
 *  Export our configurations
 *  @type {Object}
 */
module.exports = {
  entry: './source/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets/js')
  },
  watch: true
};
