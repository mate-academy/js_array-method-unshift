'use strict';

/**
 * Implement method unshift
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 */

function applyCustomUnshift() {
  [].__proto__.unshift2 = function() {
    // write code here
  };
}

module.exports = applyCustomUnshift;
