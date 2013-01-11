#node-restore

Set a restore point for an object.  Modify the object.  Restore the object back to the original point.
For me useful for testing.  For you?  Useful for....everything?!


[![Build Status](https://travis-ci.org/brianc/node-restore.png?branch=master)](https://travis-ci.org/brianc/node-restore)

#example

```js
var someone = {
  name: 'brian',
  age: 21,
  happy: true
};

var restore = require('restore');

//set a restore point
restore(someone);

//modify the object
someone.happy = 'yes!';
someone.age = 22;

console.log(someone.age);
//22
console.log(someone.happy);
//yes!

//restore the object back to the previous restore point
restore(someone);
console.log(someone.age);
//21
console.log(someone.happy);
//true
```

## install
`npm install restore`

## license
MIT
