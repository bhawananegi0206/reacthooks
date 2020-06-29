Array.prototype.customfilter =  function (items) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
      if (items(this[i], i, this))
       result.push(this[i]);
    }
    return result;
  };
  
  
  Array.prototype.customMap = function(callback) {
  let result = [];
   for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i);
   }
  return result;
}

Array.prototype.customReduce = function(callback, accumulator) {
  for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
}