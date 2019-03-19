/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let b = [];
  for (let i = 0; i < preferences.length; i += 1) {    
    let n = preferences[i];
    let k = preferences[n-1];
    let l = preferences[k-1];
    if ( (l - 1 == i) && (i + 1 != preferences[i]) ) {
        count += 1;   
    }
  }
  return count/3;
};
