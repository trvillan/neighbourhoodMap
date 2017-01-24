// data.js
// Author: Tyler Villanueva
// Date: Jan 17, 2017

// -----------------------------------------------------------------------------
// Data for places

// serve placesData as array of objects instead of from a server
var placesData = [
    {
        name:         'The Royal & Ancient Golf Club of St Andrews',
        category:     'Activity / Tourism',
        description:  'Venerable home of golf, founded in 1754, with ' +
                      'a Victorian clubhouse, golf museum and course access',
        location:     { lat: 56.3435722, lng: -2.8023405 }
    },
    {
        name:         'New Course, St Andrews Links',
        category:     'Activity',
        description:  'The New Course of St. Andrews',
        location:     { lat: 56.345329, lng: -2.8093752 }
    },
    {
        name:         'Old Course, St Andrews Links',
        category:     'Activity',
        description:  'The birthplace of Golf, The Old Course of St. Andrews',
        location:     { lat: 56.3428103, lng: -2.8026938 }
    },
    {
        name:         'Rocca Bar & Grill',
        category:     'Restaurant',
        description:  'Creative, locally sourced Italian and Scottish ' +
                      'food in elegant space with St Andrews fairway views.',
        location:     { lat: 56.342763, lng: -2.8041101 }
    },
    {
        name:         'Dunvegan Pub',
        category:     'Bar / Pub',
        description:  'Golf themed pub',
        location:     { lat: 56.3421999, lng: -2.8020411 }
    },
    {
        name:         "Playfair's Restaurant and Steakhouse",
        category:     'Restaurant',
        description:  'Modern british restaurant',
        location:     { lat: 56.3421239, lng: -2.8009139 }
    },
    {
        name:         "The Road Hole Restaurant",
        category:     'Restaurant',
        description:  'Luxe and elegant hotel restaurant for ' +
                      'Scottish fine dinning',
        location:     { lat: 56.344481, lng: -2.8116642 }
    },
    {
        name:         'Old Course Hotel',
        category:     'Hotel',
        description:  'High-end hotel on the links of St Andrews ' +
                      'golf course, with a spa, restarant and kids programs',
        location:     { lat: 56.3439219, lng: -2.8111079 }
    },
    {
        name:         'The Seafood Restaurant',
        category:     'Restaurant',
        description:  'British seafood in modern, white tablecloth ' +
                      'setting with sea views through floor-to-ceiling windows',
        location:     { lat: 56.343866, lng: -2.8001809 }
    },
    {
        name:         'St Andrews Aquarium',
        category:     'Activity / Tourism',
        description:  'Aquarium with a black tip reef shark, seals, '+
                      'penguins and more than 100 fish',
        location:     { lat: 56.343645, lng: -2.8000143 }
    },
    {
        name:         "Best Western Scores Hotel",
        category:     'Hotel',
        description:  'Best western chain hotel.',
        location:     { lat: 56.342956, lng: -2.8015452 }
    },
    {
        name:         'Dunvegan Hotel',
        category:     'Hotel',
        description:  'Casual rooms in a golf-themed hotel.',
        location:     { lat: 56.342283, lng: -2.8021561 }
    },
    {
        name:         "Bibi's cafe",
        category:     'Cafe',
        description:  'Coffee shop',
        location:     { lat:  56.3420132, lng: -2.7996401 }
    },
    {
        name:         "Taste",
        category:     'Cafe',
        description:  'Coffee shop',
        location:     { lat:  56.3416047, lng: -2.7984459 }
    },
    {
        name:         "Ziggys",
        category:     'Restaurant',
        description:  'Dynamic, rock-themed dining since 1983',
        location:     { lat:  56.3422659, lng: -2.7988938 }
    },
    {
        name:         "British Golf Museum",
        category:     'Activity / Tourism',
        description:  'Collection of golf clubs and memorabilia ' +
                      "tracing the game's history from 15th century to today",
        location:     { lat:  56.3439535, lng: -2.8017598 }
    },

];


// -----------------------------------------------------------------------------
// Map data

var map;

// set up map parameters
var mapDiv = document.getElementById('map');
var mapOptions = {
    center: {lat: 56.3376601, lng: -2.7977307},
    zoom: 15,
    styles: mapStyles,
    mapTypeControl: false
};

// set up map styles ( from: https://snazzymaps.com/style/134/light-dream )
var mapStyles = [
    {
        "featureType":"landscape",
        "stylers":
            [
                {"hue":"#FFBB00"},
                {"saturation":43.400000000000006},
                {"lightness":37.599999999999994},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.highway",
        "stylers":
            [
                {"hue":"#FFC200"},
                {"saturation":-61.8},
                {"lightness":45.599999999999994},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.arterial",
        "stylers":
            [
                {"hue":"#FF0300"},
                {"saturation":-100},
                {"lightness":51.19999999999999},
                {"gamma":1}
            ]
    },
    {
        "featureType":"road.local",
        "stylers":
            [
                {"hue":"#FF0300"},
                {"saturation":-100},
                {"lightness":52},
                {"gamma":1}
            ]
    },
    {
        "featureType":"water",
        "stylers":
            [
                {"hue":"#0078FF"},
                {"saturation":-13.200000000000003},
                {"lightness":2.4000000000000057},
                {"gamma":1}
            ]
    },
    {
        "featureType":"poi",
        "stylers":
            [
                {"hue":"#00FF6A"},
                {"saturation":-1.0989010989011234},
                {"lightness":11.200000000000017},
                {"gamma":1}
            ]
    }
];


// -----------------------------------------------------------------------------
// Foursquare data


// add access parameters
var foursquareClientID = '30MHFZETLY40UTVUNCGBO3A1OTQIWIHOQU3P4B3SDIVB21C5',
    foursquareClientSecret = 'XYVQVJ1VCDRZB5YG0FYGZFYOSCRKESKZLFM10US5DTNRAXCX';
