/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {
    const array = path.split(".");
    let counter = 0;


    return function (obj) {
        let result;
        findFieldInObject(obj);

        // recursion function
        function findFieldInObject(obj) {
          let nameOfFieldInObject = array[counter]

          if (Object.keys(obj).includes(nameOfFieldInObject)) {
            if (counter === array.length - 1) {
              result = obj[nameOfFieldInObject];
            } else {
              counter++;
              findFieldInObject(obj[nameOfFieldInObject])
            }
          }
        }

        return result;
    };
}

// const product = {
//   category: {
//     title: "Goods"
//   }
// }
//
// const getter = createGetter('category.title');
//
// console.log(getter(product)); // Goods
// let array = ['title']
//
// let name = 'category'
// console.log(product.category[array[0]])

