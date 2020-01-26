'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arrElements = [...elements];
    const tempArrElements = [...this];

    for (let i = 0; i < arrElements.length; i++) {
      this[i] = arrElements[i];
    }

    for (let i = 0; i < tempArrElements.length; i++) {
      const addIndex = arrElements.length;

      this[addIndex + i] = tempArrElements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
