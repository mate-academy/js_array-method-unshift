'use strict';

/**
 * Implement method unshift
 *
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...args) {
    if (args.length === 0) {
      return this.length;
    }
    const thisArray = [...this];
    args.forEach((value, index) => {
      this[index] = value;
    });
    thisArray.forEach((value, index) => {
      this[args.length + index] = value;
    });
    return this.length;
  };
}

module.exports = applyCustomUnshift;
