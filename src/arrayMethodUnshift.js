'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newItems = [...elements];
    const oldItems = [...this];
    this.length = 0;
    for (let i = 0; i < newItems.length; i++) {
      this[i] = newItems[i];
    }
    for (let j = 0; j < oldItems.length; j++) {
      this[newItems.length + j] = oldItems[j];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
