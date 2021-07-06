'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const combined = [...elements, ...this];

    for (let i = 0; i < combined.length; i++) {
      this[i] = combined[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
