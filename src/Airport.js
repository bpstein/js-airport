function Airport(){
	this.docked = [];
};

Airport.prototype.land = function(plane){
  if (plane.isLandedStatus()) {
    throw new Error("This plane is already landed!");
  } else {
    plane.landed();
    this.docked.push(plane);
  };
};

Airport.prototype.launch = function(plane){
  if (!(plane.isLandedStatus())) {
  	throw new Error("This plane is already airborne!");
  } else if (!(this.docked.includes(plane))) {
  	throw new Error("This plane is not in the airport!");
  } else {
  	plane.flying();
    this.docked.pop(plane);
  };
};

