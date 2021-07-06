'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const initialElements = [...this];
    if (elements.length > 0) {
      for (let i = 0; i < initialElements.length + elements.length; i++) {
        this[i] = (i < elements.length)
          ? elements[i]
          : initialElements[i - elements.length];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
