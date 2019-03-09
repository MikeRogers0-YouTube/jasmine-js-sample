function Blark() {
  var isParenting = false;
}

Blark.prototype.sayHi = function() {
  if(this.isParenting) {
    return 'Hi Son';
  } else {
    return 'gary';
  }
};

Blark.prototype.startParenting = function() {
  this.isParenting = true;
};

Blark.prototype.stopParenting = function() {
  this.isParenting = false;
};
