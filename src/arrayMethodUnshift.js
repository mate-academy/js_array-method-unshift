'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const elementsLength = elements.length;

    for (let i = this.length + elementsLength - 1; i >= 0; i--) {
      if (i >= elementsLength) {
        this[i] = this[i - elementsLength];
      } else {
        this[i] = elements[i];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
