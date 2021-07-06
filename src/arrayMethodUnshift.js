'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const items = this;

    for (const item of items) {
      elements[elements.length] = item;
    }

    for (let i = 0; i < elements.length; i++) {
      items[i] = elements[i];
    }

    return items.length;
  };
}

module.exports = applyCustomUnshift;
