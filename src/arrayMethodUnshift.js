'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const elementsToAdd = [...elements];

    if (elementsToAdd.length === 0) {
      return this.length;
    } else {
      for (let i = this.length + elementsToAdd.length - 1; i >= 0; i--) {
        if (i >= elementsToAdd.length) {
          this[i] = this[i - elementsToAdd.length];
        } else {
          this[i] = elementsToAdd[i];
        };
      }
      return this.length;
    };
  };
}

module.exports = applyCustomUnshift;
