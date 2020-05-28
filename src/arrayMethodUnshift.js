'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!this.length) {
      return;
    }

    const original = [...this];

    for (let i = 0; i < elements.length + original.length; i++) {
      this[i] = i < elements.length
        ? elements[i]
        : original[i - elements.length];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
