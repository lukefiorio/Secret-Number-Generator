'use strict';
module.exports = function() {
  // set secretNumber to a random Number
  const secretNumber = Math.random()*1000000;
  // declare a function that will return that secretNumber when invoked
  const secretNumberGenerator = function() {
    return secretNumber;
  }
  // return (and therefore invoke) the function that will return the secretNumber var
  return secretNumberGenerator;
};