'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const thisElements = [ ...this ];

    for (let j = 0; j < thisElements.length; j++) {
      for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
      }
      this[elements.length + j] = thisElements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
