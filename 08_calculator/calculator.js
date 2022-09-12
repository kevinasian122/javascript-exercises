const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
  let sum = 0;
  for(let i = 0 ;i < arr.length; i++){
    sum+= arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((total, elem) => {
    return total * elem;
  }, 1)
};

const power = function(x,y) {
  return x**y;
};

const factorial = function(x) {
  if(x===0)return 1;
  let ans = 1;
	for(let i=1;i<=x;i++){
    ans = ans * i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
