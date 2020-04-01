'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const items = this;

    for (let i = 0; i < items.length; i++) {
      elements[elements.length] = items[i];
    }

    for (let i = 0; i < elements.length; i++) {
      items[i] = elements[i];
    }

    return items.length;
  };
}

module.exports = applyCustomUnshift;
