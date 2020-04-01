'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const newValues = [...elements];
    const presentValues = [...this];
    let j = 0;

    this.length = presentValues.length + newValues.length;

    for (let i = 0; i < this.length; i++) {
      if (i > newValues.length - 1) {
        this[i] = presentValues[j];
        j++;
      } else {
        this[i] = newValues[i];
      }
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
