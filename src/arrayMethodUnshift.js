'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const unshiftedArary = [...elements, ...this];

    for (let i = 0; i < unshiftedArary.length; i++) {
      this[i] = unshiftedArary[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
