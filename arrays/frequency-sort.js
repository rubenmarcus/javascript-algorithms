/*


1.Frequency Sort

Given an array of n item values, sort the array in ascending order, first by the frequency of each value, 
then by the values themselves


Example
n = 6 
items = [4,5,6,5,4,3]

- 2 values that occur once : [3,6]
- 2 values that occur twice: [4,4,5,5]
- the array of items sorted by frequency and then by value in ascending order [3,6,4,4,5,5]


*/

const input = [4, 5, 6, 5, 4, 3];

export function itemsSort(items) {
  const obj = [];

  for (const num of items) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return items.sort((a, b) => (obj[a] !== obj[b] ? obj[a] - obj[b] : a - b));
}

console.log(itemsSort(input));
