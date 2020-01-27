'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!elements.length) {
      return this.length;
    } else {
      const unshiftArr = [...elements, ...this];

      for (let i = 0; i < unshiftArr.length; i++) {
        this[i] = unshiftArr[i];
      }

      return this.length;
    }
  };
}

module.exports = applyCustomUnshift;
