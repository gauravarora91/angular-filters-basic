'use strict';

/**
 * @ngdoc function
 * @name ixigoTestApp.controller:FlightsCtrl
 * @description
 * # FlightsCtrl
 * Controller of the ixigoTestApp
 */


angular.module('ixigoTestApp')	

  .controller('FlightsCtrl', function ($scope) {

  	/*
  	 *	Bind Airlines Model with Checkboxes State (by adding an extra state attribute to array)
  	 */
	var airlines = [];
	angular.forEach(airlineMap, function(value, key) {
	  	  	
	  		this.push( { name:value, code:key, state:false } );		  				  	

	},airlines);
	$scope.airlines = airlines;


	/*
  	 *	Bind Airlines Class with Checkboxes State
  	 */  	  	
  	var airlineClass = [ 
  							{ 'class' : 'Business', 'state' : false },
  							{ 'class' : 'Economy', 'state' : false }
  					   ];

  	$scope.airlineClass = airlineClass;

  	// Data Sheet has price as string, parsing it into Int so that we can sort the price in table
  	flightsData = angular.forEach(flightsData, function(value) {		  	
		  	
    		value.price = parseInt(value.price);    		

		},flightsData);  	


  	$scope.flightsData = flightsData;


  	$scope.duration = function(land, takeoff){  		
		return land-takeoff;
  	};

  	$scope.codeToName = function(code){    	
		return airlineMap[code];
  	};

  	$scope.airportCodeToName = function(code){    	
		return airportMap[code];
  	};

  	$scope.airlineToggle = function() {  		

  		var flightsDataFiltered = [];  		

  		// Check for active airlines states
  		angular.forEach(airlines, function(value){			

  			if(value.state){
  				flightsDataFiltered = flightsDataFiltered.concat( $scope.airlineFilter(value.code) );
  			}

  		});
  		
  		//Airline Class Filter
  		flightsDataFiltered = $scope.classFilter( flightsDataFiltered );

  		// No Filter - No Result - Return All
  		if(flightsDataFiltered.length === 0){  			
  			$scope.flightsData = flightsData;
  			return $scope.flightsData;
  		}

  		$scope.flightsData = flightsDataFiltered;
  		
    };


    // Filter for Airline Companies
    $scope.airlineFilter = function(code) {   	        	

    	var flightsDataFiltered = [];    	

		angular.forEach(flightsData, function(value) {						

		  	if( value.airlineCode === code )
		  	{

		  		this.push(value);		  

		  	}

		},flightsDataFiltered);		

		return flightsDataFiltered;
		
	};


	// Filter for Ticket Class
	$scope.classFilter = function(data) {

	  	// IF DATA SET IS EMPTY
  		if(data.length === 0){  			
  			 data = flightsData;
  		} 	

    	var flightsDataFiltered = [];   	

    	// Loop through to get all active Class Filters
    	angular.forEach(airlineClass, function(airlineClassValue) {
    		if( airlineClassValue.state === true ){

				angular.forEach(data, function(value) {			
						if( value.class === airlineClassValue.class )				
							{
								this.push(value);
							}							
				},flightsDataFiltered);

			}

		});

    	// No Class is selected / Return what we got
		if(flightsDataFiltered.length === 0){
			return data;
		}
    	
		return flightsDataFiltered;
		
	};



});
