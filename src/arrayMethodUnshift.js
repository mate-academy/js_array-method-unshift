'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const mergedArray = [...elements, ...this];

    for (let i = 0; i < mergedArray.length; i++) {
      this[i] = mergedArray[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
