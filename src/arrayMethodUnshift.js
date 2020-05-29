'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const addedList = Array.from(arguments);

    this.length = this.length + addedList.length;

    for (let i = (this.length - 1); i > -1; i--) {
      if (i >= addedList.length) {
        this[i] = this[i - addedList.length];
      } else {
        this[i] = addedList[i];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
