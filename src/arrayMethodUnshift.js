'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.reverse();
    if (elements.length > 1) {
      elements.reverse();
    }
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }
    this.reverse();
    return this.length;
  };
}

module.exports = applyCustomUnshift;
