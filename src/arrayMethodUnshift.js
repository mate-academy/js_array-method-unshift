'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = 0; i < this.length; i++) {
      elements[elements.length] = this[i];
    }
    for (let elem = 0; elem < elements.length; elem++) {
      this[elem] = elements[elem];
    }
    return this.length;
    // write code here
  };
}

module.exports = applyCustomUnshift;
