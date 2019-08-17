'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const count = this.length - 1 + elements.length;

    for (let i = count; i >= 0; i--) {
      this[i] = this[i - elements.length];

      if (this[i - elements.length] === undefined) {
        this[i] = elements[i];
      }
    }

    return this.length;
  };
}
module.exports = applyCustomUnshift;
