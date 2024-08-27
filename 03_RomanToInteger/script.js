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
    const currentVal = romanMap[s[i]];
    // Obtener el valor del símbolo siguiente (si existe)
    const nextVal = romanMap[s[i + 1]];

    // Si el valor actual es menor que el siguiente, restarlo
    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      // De lo contrario, sumarlo
      total += currentVal;
    }
  }

  return total;
}

// Ejemplos de uso
console.log(romanToInt("III")); // Salida: 3
console.log(romanToInt("LVIII")); // Salida: 58
console.log(romanToInt("MCMXCIV")); // Salida: 1994
