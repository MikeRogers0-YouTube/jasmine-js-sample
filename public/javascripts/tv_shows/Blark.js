function Blark() {
  var isParenting = false;
}

Blark.prototype.sayHi = function() {
  return 'Hi Son';
};

Blark.prototype.startParenting = function() {
  this.isParenting = true;
};

Blark.prototype.stopParenting = function() {
  this.isParenting = false;
};
