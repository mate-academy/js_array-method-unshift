'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const elementsLength = elements.length;

    for (let i = this.length - 1; i >= 0; i--) {
      this[i + elementsLength] = this[i];
    }

    for (let i = 0; i < elementsLength; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
