'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const clonedArray = [...this];
    let i;

    for (i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    for (let j = 0; j < clonedArray.length; j++) {
      this[j + i] = clonedArray[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
