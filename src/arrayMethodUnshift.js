'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const values = [];
    for (let i = 0; i < elements.length; i++) {
      values[i] = elements[i];
    }

    for (let i = 0; i < this.length; i++) {
      values[values.length] = this[i];
    }

    for (let i = 0; i < values.length; i++) {
      this[i] = values[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
