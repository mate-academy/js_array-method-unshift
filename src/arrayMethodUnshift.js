'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = this.length + elements.length - 1; i >= elements.length; --i) {
      this[i] = this[i - elements.length];
    }

    for (let i = 0; i < elements.length; ++i) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
