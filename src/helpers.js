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

Array.prototype.customReduce = function(callback, acc) {
  for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i]);
  }
  return acc;
}

Array.prototype.customForEach = function(callback) {
  for (var i = 0; i < this.length; i++)
      callback(this[i], i, this);
};