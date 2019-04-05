'use strict';

/**
 * Implement method unshift
 *
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function() {
    // write code here
  };
}

module.exports = applyCustomUnshift;
