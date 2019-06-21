'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (arguments.length === 0) {
      return this.length;
    }

    const newThis = [...arguments, ...this];

    for (let i = 0; i < newThis.length; i++) {
      this[i] = newThis[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
