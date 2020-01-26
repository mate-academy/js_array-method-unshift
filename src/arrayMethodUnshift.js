'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const unshiftedArray = [...elements, ...this];

    if (elements.length === 0) {
      return this.length;
    }

    for (let i = 0; i < unshiftedArray.length; i++) {
      this[i] = unshiftedArray[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
