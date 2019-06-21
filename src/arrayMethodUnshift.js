'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let index = 0; index < this.length; index++) {
      elements[elements.length] = this[index];
    }
    for (let index = 0; index < elements.length; index++) {
      this[index] = elements[index];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
