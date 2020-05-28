'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const temp = [...this];
    let index = 0;

    const allLength = this.length + elements.length;

    for (let i = 0; i < allLength; i++) {
      if (i < elements.length) {
        this[i] = elements[i];
      } else {
        this[i] = temp[index++];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
