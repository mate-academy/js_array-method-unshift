'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const clone = [];
    for (const key of this) {
      clone[key] = this[key];
    }
    this.length = 0;
    let i;
    for (i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    let j = 0;
    i = this.length;
    while (j < clone.length) {
      this[i] = clone[j];
      i++;
      j++;
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
