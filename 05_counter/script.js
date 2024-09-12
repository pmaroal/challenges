var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10); // n inicial es 10
console.log(counter(), counter()); // Devuelve 10, luego incrementa n a 11
