'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newArray = [...elements, ...this];
    this.length = 0;

    for (let i = 0; i < newArray.length; i++) {
      this[i] = newArray[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
