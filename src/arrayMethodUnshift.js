'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (this.length < 1) {
      return undefined;
    }
    const afterShift = [];
    for (let i = 0; i < elements.length; i++) {
      afterShift[i] = elements[i];
    }
    for (let i = 0; i < this.length; i++) {
      afterShift[afterShift.length] = this[i];
    }
    for (let i = 0; i < afterShift.length; i++) {
      this[i] = afterShift[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
