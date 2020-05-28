'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const elementsLength = elements.length;
    const copy = [...this];

    this.length += elementsLength;

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    for (let i = 0; i < copy.length; i++) {
      this[i + elementsLength] = copy[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
