'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!elements.length) {
      return this.length;
    }

    const unshifted = [ ...elements, ...this ];

    for (let i = 0; i < unshifted.length; i++) {
      this[i] = unshifted[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
