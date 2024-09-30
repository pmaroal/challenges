// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  // Crea un nodo dummy
  let dummy = new ListNode(0);
  let current = dummy;

  // Iterar mientras ambas listas tengan nodos
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1; // Vincula list1 a la lista fusionada
      list1 = list1.next; // Avanza al siguiente nodo de list1
    } else {
      current.next = list2; // Vincula list2 a la lista fusionada
      list2 = list2.next; // Avanza al siguiente nodo de list2
    }
    current = current.next; // Mueve el puntero current hacia adelante
  }

  // Si una de las listas aún tiene nodos, vincúlala directamente
  current.next = list1 !== null ? list1 : list2;

  // El nodo siguiente a dummy es el comienzo de la lista fusionada
  return dummy.next;
};
