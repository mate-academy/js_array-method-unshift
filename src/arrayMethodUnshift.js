'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const mainArr = Array.from(this);

    for (let i = (mainArr.length - 1); i >= 0; i--) {
      this[i + elements.length] = this[i];
    }

    for (let k = 0; k < elements.length; k++) {
      this[k] = elements[k];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
