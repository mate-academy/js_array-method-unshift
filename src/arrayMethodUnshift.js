'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const length = this.length - 1;
    const elem = [...elements];
    for (let i = 0; i < this.length; i++) {
      this[length + elem.length - i] = this[length - i];
    };
    for (let j = 0; j < elem.length; j++) {
      this[j] = elem[j];
    };
    return this.length;
  };
}

module.exports = applyCustomUnshift;
