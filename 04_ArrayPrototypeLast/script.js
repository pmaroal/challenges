//@return {null|boolean|number|string|Array|Object}

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

// Ejemplo 1
let nums1 = JSON.parse("[null, {}, 3]");
console.log(nums1.last()); // Salida: 3

// Ejemplo 2
let nums2 = JSON.parse("[]");
console.log(nums2.last()); // Salida: -1
