function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  // recursive
  function _curried(depth, args) {
    return function (newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  // first call
  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

let curriedAdd = curry(add);
let addFive = curriedAdd(5);

let result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
console.log(result);

// my self
function manyargs(a,b,c,d) {
  return a+b*10+c*100+d*1000;
}
let l = console.log;

l(manyargs(1,2,3,4));

let carriedManyargs = curry(manyargs);
l(carriedManyargs(1)); // funct(b c d)
l(carriedManyargs(1)(2)(5)(9));

let myCarriedManyargs = myCurry(manyargs);
l(myCarriedManyargs(1));
// l(myCarriedManyargs(1)(4));
// l(myCarriedManyargs(1)(2)(5)(9));

function myCurry(fn) {
  // trivial case
  if (fn.length === 0) return fn; // no args
  // else - ret carried fun at one arg
  return _cur(fn, 0);

  function _cur(fn, x) {
    return function () {
    }
  }
}
