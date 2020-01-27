'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (this.length === 0) {
      return undefined;
    }

    const originalPart = [];

    for (let i = 0; i < this.length; i++) {
      originalPart[originalPart.length] = this[i];
    }

    this.length = 0;

    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }

    for (let i = 0; i < originalPart.length; i++) {
      this[this.length] = originalPart[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
