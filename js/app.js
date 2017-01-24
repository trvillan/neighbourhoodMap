// app.js
// Author: Tyler Villanueva
// Date: Jan 17, 2017

// -----------------------------------------------------------------------------
// load up map & start up app

// asynchronously load in googleMaps
var googleMaps = "https://maps.googleapis.com/maps/api/js?" +
                 "key=AIzaSyBQLmznp1l7uFNl_N18dVqm-4r2HdgO3Zg";

$.getScript(googleMaps)
    // handle googleMaps success
    .done(function () {
        googleSuccess();
    })
    // handle googleMaps error
    .fail(function () {
        googleError();
});

// add googleSuccess function
function googleSuccess () {
    // initialize map
    map = new google.maps.Map(mapDiv, mapOptions);

    // initialize knockout
    ko.applyBindings( new placesViewModel(map) );

}

// add googleError function
function googleError () {
    // alert error message
    alert('GoogleMaps could not be loaded.\nPlease try again & refresh the page.');

}
