function Weather(){
  this._FORECAST = 0.25;
};

Weather.prototype.isStormy = function() {
  return (Math.random() > this._FORECAST);
};