'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!elements.length) return this.length;
    const objectLength = this.length;
    const argumentsLength = elements.length;
    const newArrayLength = objectLength + argumentsLength;
    this.length += elements.length;
    for (let i = newArrayLength - 1; i >= 0; i--) {
      this[i] = this[i - argumentsLength];
      if (i <= argumentsLength - 1) {
        this[i] = elements[i];
      }
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
