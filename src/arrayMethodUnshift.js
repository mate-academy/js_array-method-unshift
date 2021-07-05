'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const items = this;

    items.length += elements.length;

    for (let i = items.length; i > elements.length; i--) {
      items[i - 1] = items[i - elements.length - 1];
    }

    for (let i = 0; i < elements.length; i++) {
      items[i] = elements[i];
    }

    return items.length;
  };
}

module.exports = applyCustomUnshift;
