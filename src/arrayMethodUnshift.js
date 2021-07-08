'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const inputElements = [...elements];

    for (let i = 0; i < this.length; i += 1) {
      inputElements[inputElements.length] = this[i];
    }

    for (let i = 0; i < inputElements.length; i += 1) {
      this[i] = inputElements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
