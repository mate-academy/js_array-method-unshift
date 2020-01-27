'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const array = [...elements, ...this];

    for (let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }

    return array.length;
  };
}

module.exports = applyCustomUnshift;
