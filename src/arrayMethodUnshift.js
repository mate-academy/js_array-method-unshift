'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const addedItems = [...elements, ...this];

    for (let i = 0; i < addedItems.length; i++) {
      this[i] = addedItems[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
