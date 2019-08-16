'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.reverse();

    for (let i = elements.length; i > 0;) {
      this[this.length] = elements[i - 1];
      i = i - 1;
    }
    this.reverse();
    return this.length;
  };
}

module.exports = applyCustomUnshift;
