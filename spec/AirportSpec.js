describe("Airport", function() {

	var airport;
	var plane = jasmine.createSpyObj('plane', ['isLandedStatus', 'landed', 'flying']);
	var landedPlane = jasmine.createSpyObj('landed plane', ['isLandedStatus','landed','flying']);
	var flyingPlane = jasmine.createSpyObj('flying plane', ['isLandedStatus','landed','flying']);
	var stormyWeather = jasmine.createSpyObj('stormy weather', ['isStormyStatus', 'stormy', 'fine']);
	var fineWeather = jasmine.createSpyObj('fine weather', ['isStormyStatus', 'stormy', 'fine']);

	beforeEach( function() {
		airport = new Airport();
		plane.isLandedStatus.and.returnValue(true);
		landedPlane.isLandedStatus.and.returnValue(true);
		flyingPlane.isLandedStatus.and.returnValue(false);
		stormyWeather.isStormyStatus.and.returnValue(true);
		fineWeather.isStormyStatus.and.returnValue(false);
	});

	it("Should tell the plane to land", function() {
		airport.land(flyingPlane);
		expect(flyingPlane.landed).toHaveBeenCalled();
	});

	it("Should tell the plane to takeoff", function() {
		spyOn(airport,'isStormy').and.returnValue(false);
		expect(function() {
			airport.land(flyingPlane);
			flyingPlane.isLandedStatus.and.returnValue(true);
			airport.launch(flyingPlane);
			expect(flyingPlane.flying).toHaveBeenCalled();
		});
	});

	it("Reduce the number of planes on take off", function() {
		// spyOn(airport, 'isStormy').and.returnValue(false);
		// 	airport.land(flyingPlane);
		// 	flyingPlane.isLandedStatus.and.returnValue(true);
		// 	airport.launch(flyingPlane);
		// expect(function() {
		// 	expect(airport.docked);
		// }).toEqual([]);
	});

	it("Returns the planes in hangar when called", function() {
		// airport.launch(plane);
		// airport.land(plane);
		// plane.isLandedStatus.and.returnValue(true);
		// expect(function(){
		// 	airport.docked();
		// }).toEqual([plane]);
	});

	it("Should not land a landed plane", function() {
		expect(function(){ 
			airport.land(landedPlane); 
		}).toThrowError('This plane is already landed!');
	});

	it("Should not launch a flying plane", function() {
		expect(function(){
			airport.launch(flyingPlane);
		}).toThrowError('This plane is already airborne!');
	});

	it("Should not launch a plane that isn't already in the airport", function() {
		expect(function(){
			airport.launch(landedPlane);
		}).toThrowError('This plane is not in the airport!');
	});

	it("Can check that it is stormy", function() {
		expect(airport.isStormy()).toBeFalsy();
	});

	it("Should not launch a plane if weather is stormy", function() {
		spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ 
    	airport.land(flyingPlane); 
    	flyingPlane.isLandedStatus.and.returnValue(true);
    	airport.launch(flyingPlane);
    }).toThrowError('Cannot fly in this weather!');
	});

});





