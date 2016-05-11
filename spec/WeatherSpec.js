describe("Weather", function() {

  var weather;
  var landedPlane = jasmine.createSpyObj('landed plane', ['isLandedStatus','landed','flying']);
  var flyingPlane = jasmine.createSpyObj('flying plane', ['isLandedStatus','landed','flying']);

  beforeEach( function() {
    weather = new Weather();
    landedPlane.isLandedStatus.and.returnValue(true);
    flyingPlane.isLandedStatus.and.returnValue(false);
  });

  it('sometimes gives a stormy forecast', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });  
  
  it('sometimes gives a fine forecast', function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

});
