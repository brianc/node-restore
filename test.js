var restore = require(__dirname);

var assert = require('assert');

var family = {
  mom: 'Gertrude',
  dad: 'Walter',
  sons: ['Jack', 'John']
};

var assertOriginal = function() {
  assert.equal(family.mom, 'Gertrude');
  assert.equal(family.dad, 'Walter');
  assert.equal(family.sons.length, 2);
  assert.equal(family.sons[0], 'Jack');
  assert.equal(family.sons[1], 'John');
  console.log('original family ok');
};

assertOriginal();

restore(family);

delete family.mom;
family.dad = null;
family.sons = ['Fred'];
assert.strictEqual(family.mom, undefined);
assert.strictEqual(family.dad, null);
assert.strictEqual(family.sons.length, 1);
assert.strictEqual(family.sons[0], 'Fred');
console.log('family changed.  Restoring family...');

restore(family);
assertOriginal();

console.log('ok');
