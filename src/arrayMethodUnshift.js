'use strict';

/**
 * Implement method unshift
 *
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...args) {
    const howManyArgs = args.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + howManyArgs] = this[i];
    }

    for (let k = 0; k < args.length; k++) {
      this[k] = args[k];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
