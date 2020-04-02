'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const arr = this;

    for (let i = arr.length - 1; i >= 0; i--) {
      this[i + elements.length] = arr[i];
    }

    for (let i = 0; i < elements.length; i++) {
      arr[i] = elements[i];
    }

    return arr.length;
  };
}

module.exports = applyCustomUnshift;
