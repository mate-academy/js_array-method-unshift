'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (arguments.length === 0) {
      return this.length;
    }

    const newThis = [];
    const lengthOfArgum = arguments.length;

    for (let i = 0; i < lengthOfArgum; i++) {
      newThis[i] = arguments[i];
    }

    for (let i = 0; i < this.length; i++) {
      newThis[i + lengthOfArgum] = this[i];
    }

    for (let i = 0; i < newThis.length; i++) {
      this[i] = newThis[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
