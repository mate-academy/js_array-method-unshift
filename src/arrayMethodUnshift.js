'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const list = [...elements];

    list.reverse();
    this.reverse();

    for (let i = 0; i < list.length; i++) {
      this[this.length] = list[i];
    }

    this.reverse();

    return this.length;
  };
}

module.exports = applyCustomUnshift;
