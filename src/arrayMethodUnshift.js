'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.splice(0, this.length, ...elements, ...this);
    return this.length;
  };
}

module.exports = applyCustomUnshift;
