'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const copyArr = [...elements];

    for (let i = 0; i < this.length; i++) {
      copyArr[copyArr.length] = this[i];
    }

    for (let i = 0; i < copyArr.length; i++) {
      this[i] = copyArr[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
