'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!this.length) {
      return;
    }

    const list = [...elements, ...this];

    for (let i = 0; i < list.length; i++) {
      this[i] = list[i];
    }

    return list.length;
  };
}

module.exports = applyCustomUnshift;
