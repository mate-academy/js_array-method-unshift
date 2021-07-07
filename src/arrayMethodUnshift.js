'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const unshiftItems = Array.from(arguments);

    this.length = this.length + unshiftItems.length;

    for (let i = this.length - 1; i >= unshiftItems.length - 1; i--) {
      this[i] = this[i - unshiftItems.length];
    }

    for (let i = 0; i < unshiftItems.length; i++) {
      this[i] = unshiftItems[i];
    }

    const answer = this.length;

    return answer;
  };
}

module.exports = applyCustomUnshift;
