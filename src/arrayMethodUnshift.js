'use strict';

function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = (this.length + elements.length - 1); i >= 0; i--) {
      this[i] = i < elements.length ? elements[i] : this[i - elements.length];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
