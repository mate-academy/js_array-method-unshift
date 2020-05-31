'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (this.length === 0) {
      return undefined;
    }

    const copyOfTheArray = [...this];

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    for (let i = 0; i < copyOfTheArray.length; i++) {
      this[i + elements.length] = copyOfTheArray[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
