//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(' ')
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

//option 1
function DNAtoRNA(dna) {
  return dna
    .split('')
    .map((item) => (item === 'T' ? 'U' : item))
    .join('')
}

//option 2
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//option 1
var min = function (list) {
  list.sort((a, b) => a - b)
  return list[0]
}

var max = function (list) {
  list.sort((a, b) => b - a)
  return list[0]
}

//option 2
var min = function (list) {
  return Math.min(...list)
}

var max = function (list) {
  return Math.max(...list)
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minValue = Math.min(...arr)
  return toReturn === 'value' ? minValue : arr.indexOf(minValue)
}