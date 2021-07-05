'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const elemLength = elements.length;
    this.length += elemLength;
    for (let i = this.length - 1; i >= elemLength; i--) {
      this[i] = this[i - elemLength];
    }
    for (let i = 0; i < elemLength; i++) {
      this[i] = elements[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
