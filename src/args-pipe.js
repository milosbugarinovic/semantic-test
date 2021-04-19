/*
js: console.log("argv", process.argv.slice(2) );

// with multi tag
$ git tag --points-at HEAD | xargs node src/args-pipe.js
argv [ 'v1.1.16', 'v1.1.16-alpha' ]

// no tags
$ git tag --points-at HEAD | xargs node src/args-pipe.js
argv []
 */

// eslint-disable-next-line no-console
console.log('argv', process.argv.slice(2))
