'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (elements.length <= 0) {
        return this.length;
      }

      this[elements.length + i] = this[i];
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
