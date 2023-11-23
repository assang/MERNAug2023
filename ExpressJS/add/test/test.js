///////////////// should.js ///////////////////
const should = require('should')
const add = require('../add.js')
it('add function test', function(){
  (add(5, 10)).should.be.exactly(15).and.be.a.Number();
  (add(5, 10)).should.not.be.exactly(0).and.be.a.Number();
})

////////////////// assert ////////////////////////
// const assert = require('assert')
// const add = require("../add.js")

// //console.log(add)

// describe('Array', function () {
//     describe('#indexOf()', function () {
//       it('verify add function', function(){
//         // params -> actual, expected, message
//         assert.equal(add(5, 10), 15, "add() function");
//       })
//     });
//   });
  