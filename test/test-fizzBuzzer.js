const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz-buzz', function() {
    const normalValues = [15, 30, 45];

    normalValues.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return fizz', function() {
    const normalValues = [3, 6, 9];

    normalValues.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

  it('should return buzz', function() {
    const normalValues = [5, 10, 20];

    normalValues.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });

  it('should return a number', function() {
    const normalValues = [1, 2, 4, 7];

    normalValues.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(input);
    });
  });

  it('should raise error if argument is not a number', function() {
    const wrongValues = ['d', 'fgdfg', 'ghfgh'];

    wrongValues.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
});
