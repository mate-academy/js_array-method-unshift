'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (elements.length === 0) {
      return this.length;
    }

    const copyArr = [...elements];

    for (let i = 0; i < this.length; i++) {
      copyArr[copyArr.length] = this[i];
    }

    this.length = 0;

    for (let i = 0; i < copyArr.length; i++) {
      this[i] = copyArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
