'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newArr = [];
    let j = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      newArr[j] = this[i];
      j--;
    }

    for (let i = elements.length - 1; i >= 0; i--) {
      newArr[newArr.length] = elements[i];
    }

    j = newArr.length - 1;

    for (let i = 0; i < newArr.length; i++) {
      this[j] = newArr[i];
      j--;
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
