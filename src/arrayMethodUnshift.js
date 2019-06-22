'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (const item of this) {
      elements[elements.length] = item;
    }

    for (const [index] of elements.entries()) {
      this[index] = elements[index];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
