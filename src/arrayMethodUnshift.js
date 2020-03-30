'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    Array.prototype.push.apply(elements, this);

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    };

    return this.length;
  };
}

module.exports = applyCustomUnshift;
