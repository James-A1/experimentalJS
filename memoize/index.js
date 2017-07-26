function memoize(f) {
  let memo = {};

  return function() {
    args = Array.prototype.slice.call(arguments)

    if(args in memo)
      return memo[args]
    else
      return (memo[args] = f(args))
  };
}

var factorial = function(n) {
  if(n-1 === 0)
    return n;
  return n * factorial(n-1);
}

let memo = {};

var memoized_factorial = function(m) {

  var f = function(n) {
    if(memo[n]) {
      return memo[n];
    }
    else {
        if(n-1 === 0)
          return n;
        else {
           return memo[n] = n * f(n-1);
        }
    }
  }

  return f(m);
}

function test(f, iterations) {
  return function() {
    console.log("Running function @ ("+iterations+") iterations.")
    var accum = 0;
    for(var i = 0 ; i < iterations; i++) {
      var t0 = performance.now();
      f(Array.prototype.slice.call(arguments));
      var t1 = performance.now();
      accum += t1-t0;
    }
    console.log("Test complete, after: " + accum + " milliseconds.")
  }
}
