'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const source = [...this];

    if (elements.length === 0) {
      return source.length;
    };

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    for (let i = 0; i < source.length; i++) {
      this[i + elements.length] = source[i];
    }

    return this.length;
  };
};

module.exports = applyCustomUnshift;
