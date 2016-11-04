module.exports = function(x, y) {

  //Check that X is between -100 and 100
  if (x > 100 || x < -100) {
    throw new RangeError('X must be between -100 and 100');
  }

  //Check that Y is between -100 and 100
  if (y > 100 || y < -100) {
    throw new RangeError('Y must be between -100 and 100');
  }

  //Invert x
  x = x * -1;

  //Calculate R+L (Call it V): V =(100-ABS(X)) * (Y/100) + Y
  var v = (100 - Math.abs(x)) * y/100 + y

  //Calculate R-L (Call it W): W= (100-ABS(Y)) * (X/100) + X
  var w = (100 - Math.abs(y)) * x/100 + x;

  //Calculate R: R = (V+W) /2
  var r = (v + w)/2;

  //Calculate L: L= (V-W)/2
  var l = (v - w)/2;


  return {
    left: l,
    right: r
  };

}
