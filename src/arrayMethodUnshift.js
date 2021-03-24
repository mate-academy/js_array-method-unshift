'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.length += arguments.length;

    for (let i = this.length - 1; i >= 0; i--) {
      this[i] = this[i - arguments.length];
    }

    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
