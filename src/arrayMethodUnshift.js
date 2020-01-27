'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!elements.length) {
      return this.length;
    }

    const array = [...elements, ...this];

    for (let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
