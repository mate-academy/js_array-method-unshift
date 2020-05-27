'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const addedLength = elements.length;

    this.length += addedLength;

    for (let i = this.length - 1; i >= 0; i--) {
      if (i >= addedLength) {
        this[i] = this[i - addedLength];
      } else {
        this[i] = elements[i];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
