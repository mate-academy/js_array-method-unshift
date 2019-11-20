'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.reverse();
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = arguments[i];
    }
    this.reverse();
    this.splice(0, elements.length, ...elements);
    return (this.length);
  };
}

module.exports = applyCustomUnshift;
