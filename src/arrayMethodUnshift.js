'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const elementsLength = elements.length;
    const copy = [...this];
    let index = 0;

    const newLength = copy.length + elementsLength;

    for (let i = 0; i < newLength; i++) {
      if (i < elementsLength) {
        this[i] = elements[i];
      } else {
        this[i] = copy[index++];
      }
    }

    return newLength;
  };
}

module.exports = applyCustomUnshift;
