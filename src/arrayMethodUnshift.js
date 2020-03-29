'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newArrayLength = this.length + elements.length;
    const thisLength = this.length;
    const elementsLength = elements.length;

    this.length = newArrayLength;

    for (let i = 0; i < thisLength; i++) {
      this[this.length - i - 1] = this[thisLength - i - 1];
    };

    for (let i = 0; i < elementsLength; i++) {
      this[i] = elements[i];
    };

    return newArrayLength;
  };
}

module.exports = applyCustomUnshift;
