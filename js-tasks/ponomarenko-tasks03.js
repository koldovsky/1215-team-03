//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

function findSmallestInt(arr) {
    return Math.min(...arr);
  }

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript 

  const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript 

function giveMeFive(obj) {
    let arr = [];
    for (const key in obj) {
      if (key.length === 5) {
        arr.push(key);
      }
      if (obj[key].length === 5) {
        arr.push(obj[key]);
      }
    }
    return arr;
  }
  