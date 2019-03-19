/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i < preferences.length; i += 1) {    
    const n = preferences[i];
    const k = preferences[n-1];
    const l = preferences[k-1];
    if (l - 1 == i) {
      count += 1;
    }
  }
  return count;
};
