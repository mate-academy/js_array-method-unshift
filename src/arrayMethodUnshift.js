'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (const key of elements.reverse()) {
      this.splice(0, 0, key);
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
