function romanToInt(s) {
  // Mapa de valores romanos a enteros
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  // Recorremos el string
  for (let i = 0; i < s.length; i++) {
    // Obtener el valor del símbolo actual
    const firstVal = romanMap[s[i]];
    if (firstVal === undefined) continue;
    //console.log(firstVal);

    // Obtener el valor del símbolo siguiente (si existe)
    const secondVal = romanMap[s[i + 1]];
    //console.log(secondVal);
    if (secondVal === undefined) continue;
    else {
      if (secondVal <= firstVal) {
        total = firstVal + secondVal;
        //console.log(total);
      } else if (secondVal > firstVal) {
        total = secondVal - firstVal;
      }
    }
    const thirdVal = romanMap[s[i + 2]];
    if (thirdVal === undefined) continue;
    else {
      console.log(total);
      if (thirdVal <= secondVal) {
        total = total + thirdVal;
      } else if (thirdVal > secondVal) {
        thirdVal = thirdVal - secondVal;
        total = thirdVal - secondVal;
        console.log(total);
      }
    }
  }

  return total;
}

//Ejemplos de uso
console.log(romanToInt("III")); // Salida: 3
console.log(romanToInt("LVIII")); // Salida: 58
console.log(romanToInt("MCMXCIV")); // Salida: 1994
romanToInt("XIV");
