'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const myArgs = Array.from(arguments);
    const myThis = this;
    const myLength = this.length;
    let count = 0;

    for (let i = myLength - 1; i >= 0; i--) {
      this[myArgs.length + myLength - 1 - count] = myThis[i];
      count++;
    }

    for (let i = 0; i < myArgs.length; i++) {
      this[i] = myArgs[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
