'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let j = 0; j < this.length; j++) {
      elements[elements.length] = this[j];
    }
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
