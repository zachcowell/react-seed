'use strict';

// express server config options

var dist = 'dist';

module.exports = {
  user: {
    name: 'admin',
    password: 'derp'
  },
  dest: '/../' + dist,
  port: 3000,
  env: 'development'
};
