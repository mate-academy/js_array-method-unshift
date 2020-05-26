'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here

    const newLength = elements.length + this.length;

    // start from the end of the concatanated array
    for (let i = newLength - 1; i >= 0; i--) {
    // check if the script should shift values to right
      if (i >= elements.length) {
        this[i] = this[i - elements.length];
      } else {
        // if no values to shift, add new elements to the array
        this[i] = elements[i];
      }
    }

    return newLength;
  };
}

module.exports = applyCustomUnshift;
