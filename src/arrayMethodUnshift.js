'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.reverse();

    for (let i = elements.length - 1; i >= 0; i--) {
      this[this.length] = elements[i];
    }

    this.reverse();
    return this.length;
  };
}

module.exports = applyCustomUnshift;
