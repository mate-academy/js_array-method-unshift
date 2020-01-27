'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const tempArrElements = [...this];

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    for (let i = 0; i < tempArrElements.length; i++) {
      this[elements.length + i] = tempArrElements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
