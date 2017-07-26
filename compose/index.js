//I: [,Function]
//O: Function : Reduces array of functions to single function
var chain = function() {
  c_args = Array.prototype.slice.call(arguments);

  delay_eval_wrapper = c_args.map(function(f) {
    return function(input) {
      return f(input);
    };
  });

  return function() {
    f_args = Array.prototype.slice.call(arguments);

    return delay_eval_wrapper.reduce(function(acc, f) {
      return f(acc);
    }, c_args[0](f_args));
  };
};

//I: Array
//O: Integer: Sum of Integers in Array
function sum(array) {
  return array.reduce(function(acc, arg) {
    return acc + parseInt(arg);
  }, 0);
}

//I: [,Array[]]
//O: Array : Single Array of combined elements
function flatten() {
  args = Array.prototype.slice.call(arguments);

  var reduce = function(i) {
    return i.constructor !== Array
      ? i
      : i.reduce(function(acc, j) {
          return acc.concat(reduce(j));
        }, []);
  };

  return reduce(args);
}

//I: Integer
//O: Integer
function factorial(n) {
  var acc = 1;
  for(var i = 1 ; i < n + 1; i++) {
    acc *= i;
  }
  return acc;
}
