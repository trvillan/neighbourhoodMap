// model.js
// Author: Tyler Villanueva
// Date: Jan 17, 2017

// -----------------------------------------------------------------------------
// Model

// create contructor for place objects
var Place = function (data) {
    var self = this;

    self.name = data.name;
    self.category = data.category;
    self.description = data.description;
    self.location = data.location;

    self.title = ko.computed (function () {
        return self.name + self.category;
    });

    self.marker = new google.maps.Marker({
        map: map,
        position: self.location,
        icon: 'img/defaultMarker.png'
    });
};
