'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.splice(0, 0, ...elements);

    return this.length;
  };
}

module.exports = applyCustomUnshift;
