var romanToInt = function(s) {
    // Create an obj with the conversions
    const obj = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
    let result = 0
    
    // Iterate s and assign each number the value from the obj
    const splitted = s.split('').map(key => obj[key])
  
    // Iterate splitted
    // Do the subtraction when next num is lower than current num
    // Otherwise, add current num to the result variable
    for (let i = 0; i < splitted.length; i++) {
      splitted[i] < splitted[i + 1] ? result -= splitted[i] : result += splitted[i]
    }
    
    return result
  }