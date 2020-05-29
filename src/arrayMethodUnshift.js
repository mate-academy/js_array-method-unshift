'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (this.length === 0) {
      return;
    }

    const mainArray = [...this];
    const newArrayLength = mainArray.length + elements.length;

    for (let i = 0; i < newArrayLength; i++) {
      if (i < elements.length) {
        this[i] = elements[i];
      } else {
        this[i] = mainArray[i - elements.length];
      }
    }

    return newArrayLength;
  };
}

module.exports = applyCustomUnshift;
