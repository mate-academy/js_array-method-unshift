'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arr = [...this];
    let index = elements.length;

    for (let i = 0; i < index; i++) {
      this[i] = elements[i];
    }

    for (let i = 0; i < arr.length; i++) {
      this[index] = arr[i];
      index++;
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
