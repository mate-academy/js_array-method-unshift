'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = elements.length - 1; i >= 0; i--) {
      for (let z = this.length; z > 0; z--) {
        this[z] = this[z - 1];
      };
      this[0] = elements[i];
    };

    return this.length;
  };
}

module.exports = applyCustomUnshift;
