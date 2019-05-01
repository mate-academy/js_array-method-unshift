'use strict';

/**
 * Implement method unshift
 *
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...theArgs) {
    let l = this.length;
    let largs = theArgs.length;
    this.push(...theArgs);
    for (let i = l - 1; i >= 0; i--) {
      this[i + largs] = this[i];
    }
    for (let i = 0; i < largs; i++) {
      this[i] = theArgs[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
