'use strict';

/**
 * Implement method pop
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 */

function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
  };
}

module.exports = applyCustomPop;
