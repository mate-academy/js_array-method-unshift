'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    if (elements.length === 0) {
      return this.length;
    }

    for (let j = 0; j < this.length; j++) {
      elements[elements.length] = this[j];
    }

    this.length = 0;
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
