// Add gulp config code here'use strict';

var app = 'app';
var dist = 'dist';

module.exports = {

  app: app,
  dist: dist,

  clean: {
    dist: dist
  },
  scss: {
    src: app + '/scss/**/*.{sass,scss}',
    dest: dist + '/css',
    maps: '../maps',
    errLogToConsole: true,
    options: {
      // place holder for mixins etc...
      // includePaths:
    }
  },
  "nodemon": {
      "src": 'server/server.js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  browserSync: {
    // server: {
    //   baseDir: [dist],
    //   directory: true
    // },
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true,
    files: [
      dist + '/css/*.css',
      dist + '/*.js',
      dist + '/img/*',
      dist + '/fonts/*'
    ]
  },
  html: {
    src: [
      app + '/html/**/*.html'
    ],
    dest: dist
  },
  images: {
    src: app + '/img/**/*.{jpg,jpeg,png,gif,svg}',
    dest: dist + '/img'
  },
  extras: {
    src: app + '/*.{txt,ico,xml}',
    dest: dist
  },
  fonts: {
    src: app + '/fonts/**/*',
    dest: dist + '/fonts'
  },
  css: {
    src: app + '/css/**/*',
    dest: dist + '/css'
  },
  scripts : {
    src: 'app/components/index.js',
    dest: dist
  },
  watch: {
    html: app + '/html/**/*.html',
    sass: app + '/**/*.scss',
    scripts: app + '/**/*.js',
    fonts: app + '/fonts/**/*',
    images: app + '/img/**/*.{jpg,jpeg,png,gif,svg}',
    extras: app + '/*.{txt,ico,xml}'
  },
  usemin: {
    src: dist + '/*.html',
    dest: dist
  }
};
