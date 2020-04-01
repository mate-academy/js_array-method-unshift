'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const element = elements;
    let unshiftLenght = this.reverse();

    for (let i = 0; i < element.length; i++) {
      unshiftLenght = this.push(element[element.length - i - 1]);
    }

    this.reverse();

    if (element.length === 0) {
      return unshiftLenght.length;
    }

    return unshiftLenght;
  };
}

module.exports = applyCustomUnshift;
