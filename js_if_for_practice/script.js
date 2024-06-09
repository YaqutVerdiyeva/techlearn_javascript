////////////////////Task 1
function isString(str) {
  return typeof str === "string";
}
// console.log(isString("hello"));
// console.log(isString(555));

////////////////////Task 2
function findMaxNum(a, b) {
  if (isString(a) || isString(b)) {
    return "Please enter num";
  }

  if (a > b) return a;
  else return b;
}
// console.log(findMaxNum(5, 15));
// console.log(findMaxNum(25, 15));
// console.log(findMaxNum("Num", 15));

function findMinNum(a, b) {
  if (isString(a) || isString(b)) {
    return "Please enter num";
  }

  if (a < b) return a;
  else return b;
}
// console.log(findMinNum(5, 15));
// console.log(findMinNum(25, 15));
// console.log(findMinNum("Num", 15));

////////////////////Task 3
// console.log("Example 1");

function findMaxStr(a, b) {
  if (typeof a === "number" || typeof b === "number") {
    return "Please enter str";
  }

  if (a < b) return b;
  else return a;
}
// console.log(findMinStr(5, "hjh"));
// console.log(findMaxStr("a", "b"));
// console.log(findMaxStr("ab", "ad"));
// console.log(findMaxStr("Css", "html"));

// console.log("Example 2");

function findMinStr(a, b) {
  if (typeof a === "number" || typeof b === "number") {
    return "Please enter str";
  }

  if (a < b) return a;
  else return b;
}

// console.log(findMinStr(5, 6));
// console.log(findMinStr("a", "b"));
// console.log(findMinStr("ab", "ad"));
// console.log(findMinStr("Css", "html"));

////////////////////Task 4

function findMax(a, b, c) {
  let num = Number.NEGATIVE_INFINITY;
  if (num < a) {
    num = a;
  }
  if (num < b) {
    num = b;
  }
  if (num < c) {
    num = c;
  }

  return num;
}
console.log(findMax(5, 55, 151));
console.log(findMax(555, 1, 6));
console.log(findMax(5, 101, 6));
