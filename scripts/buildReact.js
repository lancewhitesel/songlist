'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
// require('../config/env');

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
let config = require('../react/webpack.config');
config.resolve.modules = [
  path.resolve(__dirname, "../react"),
  "node_modules"
];
console.log('config: ', config);
const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
// if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  // process.exit(1);
// }

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

let compiler = webpack(config);
return new Promise((resolve, reject) => {
  compiler.run((err, stats) => {
    if (err) {
      return reject(err);
    }
    // const messages = formatWebpackMessages(stats.toJson({}, true));
    if (messages.errors.length) {
      // Only keep the first error. Others are often indicative
      // of the same problem, but confuse the reader with noise.
      if (messages.errors.length > 1) {
        messages.errors.length = 1;
      }
      return reject(new Error(messages.errors.join('\n\n')));
    }
    if (
      process.env.CI &&
      (typeof process.env.CI !== 'string' ||
        process.env.CI.toLowerCase() !== 'false') &&
      messages.warnings.length
    ) {
      console.log(
          '\nTreating warnings as errors because process.env.CI = true.\n' +
            'Most CI servers set it automatically.\n'
      );
      return reject(new Error(messages.warnings.join('\n\n')));
    }
    return resolve({
      // stats,
      // previousFileSizes,
      // warnings: messages.warnings,
    });
  });
});