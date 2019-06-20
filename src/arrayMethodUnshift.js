'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    let result = [];
    result = [...this];
    this.length = elements.length;

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    for (let i = 0; i < result.length; i++) {
      this[this.length] = result[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
