'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const thisElements = [ ...this ];

    for (let i = 0; i < thisElements.length; i++) {
      for (let j = 0; j < elements.length; j++) {
        this[j] = elements[j];
      }

      this[elements.length + i] = thisElements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
