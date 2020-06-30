Array.prototype.customfilter = (items) => {
    let result = [];
    for(let i = 0; i < this.length; i++) {
      if (items(this[i], i, this))
       result.push(this[i]);
    }
    return result;
  };
  
  
  Array.prototype.customMap = (callback) => {
  let result = [];
   for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i);
   }
  return result;
}

Array.prototype.customReduce = (callback, acc) => {
  for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i]);
  }
  return acc;
}

Array.prototype.customForEach = (callback) => {
  for (let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
};