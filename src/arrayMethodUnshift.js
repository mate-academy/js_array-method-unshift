'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }

    for (let j = 0; j < arguments.length; j++) {
      this[j] = arguments[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
