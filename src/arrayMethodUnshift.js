'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const temp = [...this];

    for (let i = 0; i < temp.length; i++) {
      this[i + elements.length] = temp[i];
    }

    for (let j = 0; j < elements.length; j++) {
      this[j] = elements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
