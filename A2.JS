const prompt = require("prompt-sync")({ sigint: true });
/**
 * Below is the code for the assignment#2 (Background). 
 * Author Hitesh Bhasin
 * Student # 1167791
 */

/**
 * There are 6 variables declared below with the different properties. 
 */
let num_items = 20;
let your_name = 'hitesh';
let original = [];
let upper = [];
let matches = {};
const starting_number = prompt('Please enter a starting number: ');

/**
 * After taking the user name and a number from the user
 * the code below add keys and their values name , sum 
 * once the loop is done all the keys and the values to array object called original.
 * which we have declared above. 
 */
for (let i = 1; i <= num_items; i++) {
  let sum = Number(starting_number) + i;
  let product = Number(starting_number) * i;
  original.push({ name: your_name, sum, product });
}

/**
 * 
 * @param input: input is the parameter which pass in the fuction called 
 * 'toUpperTimesThree',This function returns an array that is formatted the same was the input. 
 * It has the same number of indices and each value in the array is an object.
 * this code loops through the input array and generate a new array that is formatted similarly, 
 * but with different values. An extra key called 'div' with its value is added.
 * @returns temp_arr is returned by this function and stored in the upper variable declared above. 
 * we could have returned 'input' as well as an array, however, input can be changed by future coder
 * if this was a real life code hence used specific array called'temp_array' which return the key value object in it. 
 */

function toUpperTimesThree(input) {
    const temp_arr = [];
    for (let i = 0; i < input.length; i++) {
        let newObj={// using new object to generate new arrays.
        "name":input[i].name.toUpperCase(),
        "sum": input[i].sum * 3,
        "product":input[i].product * 3,
        "div": input[i].product / input[i].sum,
    }
    temp_arr.push(newObj);   
}
    return temp_arr;
}
/**
 * below i am appending the above declared array variable called upper.
 */
upper.push(...toUpperTimesThree(original));// learned and used spread method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

/**
 * 
 * @param o parameter o passes array variable original
 * @param u parameter u passes function called toUpperTimesThree
 * @returns returning a single object It has two keys which contain a collection of matches.
 * This function accepts two parameters called o and u which is passed in original array and the upper array created above. 
 * I used constand sum_matches and constant product_matches because these are the values to be displayed not to be modified directly 
 */
function findMatches(o, u) {
  const sum_matches = [];
  const product_matches = [];
  for (let i = 0; i < o.length; i++) {
    for (let j = 0; j < u.length; j++) {
      if (o[i].sum === u[j].sum) {
        sum_matches.push({ or: o[i], up: u[j] });
      }
      if (o[i].product === u[j].product) {
        product_matches.push({ or: o[i], up: u[j] });
      }
    }
  }
  return { "sum_matches":sum_matches, "product_matches":product_matches };
}
/**
 * assigned the values from the function which are 'key: value' pair values to above declared variable 
 * called matches.  
 */
matches=(findMatches(original, upper));
/**
 * Below is the part E of the assignment, to test the code, 
 * this output the three variables.
 */
console.log('Original', original);
console.log('Upper', upper);
console.log('Matches', matches);