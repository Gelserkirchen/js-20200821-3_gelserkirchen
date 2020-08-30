/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    // starting conditionals
    if (size === 0 || string.length === 0) return '';
    if (size === undefined) return string;

    // starting initializations
    let counter = 1;
    let finalString = string[0];

    // solution through reduce
    Array.from(string).reduce(function (firstSymbol, nextSymbol) {
      if (finalString[finalString.length - 1] !== nextSymbol) {
        finalString += nextSymbol;
        counter = 1;
      } else if (counter < size) {
        finalString += nextSymbol;
        counter++
      }

    } )

   return finalString

}

