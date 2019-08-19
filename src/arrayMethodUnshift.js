'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const initialElementLength = elements.length;
    const lengthAfterUnshifting = elements.length + this.length;

    for (let i = elements.length; i < lengthAfterUnshifting; i++) {
      elements.length++;
      elements[i] = this[i - initialElementLength];
    }

    for (let j = 0; j < elements.length; j++) {
      this[j] = elements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
