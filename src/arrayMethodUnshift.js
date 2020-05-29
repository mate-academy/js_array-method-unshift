'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const initialLength = this.length;
    const elementsLength = elements.length;

    if (elementsLength === 0) {
      return initialLength;
    }

    for (let i = initialLength - 1; i >= 0; i--) {
      this[i + elementsLength] = this[i];
    }

    for (let i = 0; i < elementsLength; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
