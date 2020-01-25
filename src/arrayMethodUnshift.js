'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const unshiftArr = [...elements, ...this];

    if (elements.length === 0) {
      return this.length;
    }

    for (let i = 0; i < unshiftArr.length; i++) {
      this[i] = unshiftArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
