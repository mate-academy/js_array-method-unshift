'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const a = this.length + arguments.length;
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
      arr[i] = arguments[i];
    }
    for (let i = arr.length, j = 0; j < this.length; i++, j++) {
      arr[i] = this[j];
    }

    for (let i = 0; i < a; i++) {
      this[i] = arr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
