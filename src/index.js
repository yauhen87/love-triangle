/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i=0; i < preferences.length; i++) {    
    let n = preferences[i];
    let k = preferences[n];
    let l = preferences[k];
    if (l == i) {
      count += 1;
    }
  }
  return count;
};
