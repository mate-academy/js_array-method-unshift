'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    if (elements.length !== 0) {
      const arr = [...this];

      for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
        this.length = elements.length;
      }

      for (let i = 0; i < arr.length; i++) {
        this[this.length] = arr[i];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
