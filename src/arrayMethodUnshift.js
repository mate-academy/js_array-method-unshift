'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const shifted = [...elements, ...this];

    for (let i = 0; i < shifted.length; i++) {
      this[i] = shifted[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
