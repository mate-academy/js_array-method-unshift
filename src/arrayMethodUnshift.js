'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const k = [...this];

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    this.length = elements.length;

    for (let i = 0; i < k.length; i++) {
      this[this.length] = k[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
