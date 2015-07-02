/* ================================================================
 * startserver by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var url = require('url');
var path = require('path');
var qs = require('querystring');
var child_process = require('child_process');
var logger = require('logx');
var EOL = require('os').EOL;

var main = require.resolve('webpack');
var bin = path.join(main, '..', '..', 'bin', 'webpack.js');

var webpack = child_process.spawn(bin, ['--watch'], {
  cwd: process.cwd()
});

webpack.stdout.on('data', function(data) {
  logger.info(EOL + data.toString())
});

webpack.stderr.on('data', function(data) {
  logger.warn(EOL + data.toString())
});

module.exports = function(req, res) {
};
