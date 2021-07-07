'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...items) {
    for (let i = 0; i < this.length; i++) {
      items[items.length] = this[i];
    }
    for (let i = 0; i < items.length; i++) {
      this[i] = items[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
