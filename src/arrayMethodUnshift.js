'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    let o = this.length - 1;

    for (let i = this.length + elements.length; i > elements.length; i--) {
      this[i - 1] = this[o];
      o--;
    };

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
