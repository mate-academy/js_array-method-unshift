'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = elements.length - 1; i >= 0; i--) {
      ++this.length;
      for (let j = this.length - 1; j >= 0; j--) {
        this[j] = this[j - 1];
      }

      this[0] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;

applyCustomUnshift();
