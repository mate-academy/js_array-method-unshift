'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newArrLength = this.length + arguments.length;

    const arr = [];

    for (let i = 0; i < this.length; i++) {
      arr[i] = this[i];
    }

    for (let i = 0; i < newArrLength; i++) {
      this[i] = elements[i];

      if (this[i] === undefined) {
        this[i] = arr[i - arguments.length];
      }
    }

    return newArrLength;
  };
}

module.exports = applyCustomUnshift;
