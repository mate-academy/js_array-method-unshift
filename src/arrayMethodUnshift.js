'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const shiftPosition = elements.length;
    const lengthCurrentList = this.length;

    for (let i = lengthCurrentList - 1; i >= 0; i--) {
      this[i + shiftPosition] = this[i];
    }

    for (let j = 0; j < elements.length; j++) {
      this[j] = elements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
