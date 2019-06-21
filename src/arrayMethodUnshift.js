'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (const item of this) {
      elements[elements.length] = item;
    }

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
