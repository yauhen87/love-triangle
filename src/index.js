/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i < preferences.length; i += 1) {    
    let n = preferences[i];
    let k = preferences[n-1];
    let l = preferences[k-1];
    if (l - 1 == i) {
      const counterN = n;
      const counterK = k;
      const counterL = l;
      if (counterN != counterK || counterN != counterL) {
        count += 1;
      }      
    }
  }
  return count;
};
