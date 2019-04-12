'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
  };
}

module.exports = applyCustomUnshift;
