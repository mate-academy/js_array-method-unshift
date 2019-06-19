'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elms) {
    for (let i = 0; i < this.length; i++) {
      elms[elms.length] = this[i];
    }

    for (let i = 0; i < elms.length; i++) {
      this[i] = elms[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
