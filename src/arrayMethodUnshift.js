'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!this.length) {
      return undefined;
    }

    const thisOriginalPart = [ ...this ];

    this.length = 0;

    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }

    for (let i = 0; i < thisOriginalPart.length; i++) {
      this[this.length] = thisOriginalPart[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
