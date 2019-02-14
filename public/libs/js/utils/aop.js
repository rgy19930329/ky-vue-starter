
Function.prototype.before = function(func) {
  var self = this;
  return function() {
    var ret = func.apply(this, arguments);
    if(!ret) {
      return ret;
    }
    return self.apply(this, arguments);
  }
}

Function.prototype.after = function(func) {
  var self = this;
  return function() {
    var ret = self.apply(this, arguments);
    if(ret) {
      return ret;
    }
    return func.apply(this, arguments);
  }
}

export default {}