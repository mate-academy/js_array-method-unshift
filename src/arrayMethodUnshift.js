'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!this.length) {
      return undefined;
    } else {
      const startArray = [ ...this ];
      let position = 0;

      for (const key of elements) {
        this[position] = key;
        position++;
      }
      for (let i = 0; i < startArray.length; i++) {
        this[position] = startArray[i];
        position++;
      }

      return this.length;
    }
  };
}

module.exports = applyCustomUnshift;
