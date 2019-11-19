'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
      arr.push(arguments[i]);
    }

    for (let j = 0; j < this.length; j++) {
      arr.push(this[j]);
    }

    this.length = 0;

    for (let k = 0; k < arr.length; k++) {
      this.push(arr[k]);
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
