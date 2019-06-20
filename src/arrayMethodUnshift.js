'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (this.length === 0) {
      return undefined;
    }
    for (let i = 0; i < this.length; i++) {
      elements[elements.length] = this[i];
    }
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
