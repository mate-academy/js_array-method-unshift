'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const addedSpaces = elements.length;

    this.length += addedSpaces;

    for (let i = this.length - 1; i > addedSpaces - 1; i--) {
      this[i] = this[i - addedSpaces];
    }

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
