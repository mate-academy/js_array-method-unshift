'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const addLenght = elements.length;

    this.length = this.length + addLenght;

    for (let i = this.length - 1; i > addLenght - 1; i--) {
      this[i] = this[i - addLenght];
    }

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
