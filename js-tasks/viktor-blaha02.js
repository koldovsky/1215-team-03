// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

// 1 --------------------------------------------------------

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// 2 --------------------------------------------------------

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// 3 --------------------------------------------------------

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// 1 --------------------------------------------------------

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// 2 --------------------------------------------------------

var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }
  return minValue;
};

var max = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

// 3 --------------------------------------------------------

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// 1 --------------------------------------------------------

function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// 2 --------------------------------------------------------

function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return toReturn === "value"
    ? minValue
    : toReturn === "index"
    ? arr.indexOf(minValue)
    : null;
}

// Додаткові завдання

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

https: function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
  return 2 * (n - 1);
}

// для того, щоб знайти непарне, потрібна формула nth odd number=2×n−1
// function nthOdd(n) {
//   return 2 * n - 1;
// }

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

// 1 --------------------------------------------------------

function getRealFloor(n) {
  return n <= 0 ? n : n < 13 ? n - 1 : n - 2;
}

// 2 --------------------------------------------------------

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else {
    return n - 2;
  }
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

// 1 --------------------------------------------------------

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

// 2 --------------------------------------------------------

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
