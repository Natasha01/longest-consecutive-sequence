module.exports = function longestConsecutiveLength(array) {

  let l = 1;
  let array_length = array.length;

  if (array_length === 0) {
    return 0;
  } else {
    if (array_length > 1) {
      let l_current = 1;
      l = 1;
      array = array.sort((a, b) => a - b);
      for (let i = 1; i < array_length; i++) {
        if (array[i] != array[i - 1]) {
          if (array[i] - array[i - 1] === 1) {
            l_current++;
          } else {
            if (l < l_current) {
              l = l_current;
            }
            l_current = 1;
          }
        }
      }
    }
  }

  return l;

}
