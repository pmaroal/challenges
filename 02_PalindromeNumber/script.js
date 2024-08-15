/** * @param {number} x * @return {boolean} */ var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const numOk = x.toString();
  const numReverse = numOk.split("").reverse().join("");
  return numOk === numReverse;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
