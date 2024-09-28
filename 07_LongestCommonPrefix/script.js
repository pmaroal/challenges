// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings./**

var longestCommonPrefix = function (strs) {
  // Si el array está vacío, retornamos una cadena vacía
  if (strs.length === 0) return "";

  // Empezamos con el primer string como el prefijo
  let prefix = strs[0];

  // Recorremos el resto de los strings
  for (let i = 1; i < strs.length; i++) {
    // Comparamos el prefijo con cada string
    while (strs[i].indexOf(prefix) !== 0) {
      // Reducimos el prefijo si no coincide
      prefix = prefix.slice(0, prefix.length - 1);
      // Si el prefijo es una cadena vacía, no hay un prefijo común
      if (prefix === "") return "";
    }
  }

  return prefix;
};
