var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var place = /** @class */ (function () {
    function place(type, name, zipCode, street, city, country, image, time, experience) {
        this.type = type;
        this.name = name;
        this.zipCode = zipCode;
        this.street = street;
        this.city = city;
        this.country = country;
        this.image = image;
        this.time = time;
        this.experience = experience;
    }
    place.prototype.render = function () {
        return "\n        <div class=\"itemContainer col-lg-3 col-md-6 col-sm-12 " + this.type + " \" val=\"" + this.time.getTime() + "\" >\n\t\t\t\t<div class=\"contentContainer\">\n\t\t\t\t\t<div class=\"d-none d-md-block d-lg-block text-center\"><img class=\"text-center\" src=\"" + this.image + "\" alt=\"Flash City\"></div>\n\t\t\t\t\t<div class=\"detail text-xs-center text-sm-center text-md-left\">\n\t\t\t\t\t\t<address class=\"add\">\n                            <h3>" + this.name + "</h3>\n                            " + this.street + "<br>\n                            " + this.zipCode + "\n                            " + this.city + "<br>\n                            " + this.country + "\n                        </address>\n                        <p class=\"visitDate\">Posted: " + this.time.toDateString() + "</p>\n                    </div>\n                    <div class=\"type " + this.type + "Btn\"><p>" + this.type + "</p></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ";
    };
    return place;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(type, name, zipCode, street, city, country, image, time, experience, phoneNbr, mailAdresse, cuisine, seats, homepage) {
        var _this = _super.call(this, type, name, zipCode, street, city, country, image, time, experience) || this;
        _this.phoneNbr = phoneNbr;
        _this.mailAdresse = mailAdresse;
        _this.cuisine = cuisine;
        _this.seats = seats;
        _this.homepage = homepage;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n        <div class=\"itemContainer col-lg-3 col-md-6 col-sm-12 " + this.type + " \" val=\"" + this.time.getTime() + "\">\n\n\t\t\t\t<div class=\"contentContainer\">\n\t\t\t\t\t<div class=\"d-none d-md-block d-lg-block text-center\"><img class=\"text-center\" src=\"" + this.image + "\" alt=\"Flash City\"></div>\n\t\t\t\t\t<div class=\"detail text-xs-center text-sm-center text-md-left \">\n                        <address class=\"add\">\n                            <h3>" + this.name + "</h3>\n                            " + this.street + "<br>\n                            " + this.zipCode + "\n                            " + this.city + "<br>\n                            " + this.country + "\n\n                        </address>\n                        <p>\n                            <i class=\"fas fa-phone\"></i>" + this.phoneNbr + "</br>\n                            <a href=\"mailto:" + this.mailAdresse + "?Subject=Reservation\"><i class=\"far fa-envelope\"></i>" + this.mailAdresse + "</a></br>\n                            <a href=\"" + this.homepage + "\"><i class=\"fas fa-at\"></i>Homepage</a></br>\n                            <img src=\"https://png.icons8.com/ios/50/000000/chair.png\" class=\"chair\">" + this.seats + "\n                        </p>\n                        <p class=\"visitDate\">Posted: " + this.time.toDateString() + "</p>\n                    </div>\n                    <div class=\"type " + this.type + "Btn\"><p>" + this.type + "</p></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ";
    };
    return restaurant;
}(place));
var eVent = /** @class */ (function (_super) {
    __extends(eVent, _super);
    function eVent(type, name, zipCode, street, city, country, image, time, experience, eventStar, eventPrice, eventDate, eventTime) {
        var _this = _super.call(this, type, name, zipCode, street, city, country, image, time, experience) || this;
        _this.eventStar = eventStar;
        _this.eventPrice = eventPrice;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        return _this;
    }
    eVent.prototype.render = function () {
        var price;
        price = this.eventPrice.toFixed(2);
        return "\n        <div class=\"itemContainer col-lg-3 col-md-6 col-sm-12 " + this.type + " \" val=\"" + this.time.getTime() + "\">\n\n\t\t\t\t<div class=\"contentContainer\">\n\t\t\t\t\t<div class=\"d-none d-md-block d-lg-block text-center\"><img class=\"text-center\" src=\"" + this.image + "\" alt=\"Flash City\"></div>\n                    <div class=\"detail text-xs-center text-sm-center text-md-left\">\n                    <address class=\"add\">\n                    <h3>" + this.eventStar + "</h3>\n                    " + this.street + "<br>\n                    " + this.zipCode + "\n                    " + this.city + "<br>\n                    " + this.country + "\n                    </address>\n                    <p> Price per ticket: <em>" + price + " \u20AC</em></br>\n                        The event was at: " + this.eventTime + " PM\n                    </p>\n                    \n                        <p class=\"visitDate\">Posted: " + this.time.toDateString() + "</p>\n                    </div>\n                    <div class=\"type " + this.type + "Btn\"><p>" + this.type + "</p></div>\n\t\t\t\t</div>\n\t\t\t</div>\n        ";
    };
    return eVent;
}(place));
var whole = [
    //Places
    new place("place", "Seifenfabrik", "8010", "Angergasse 41", "Graz", "Austria", "img/seifenfabrik.png", new Date("2013-02-08 09:30"), "Awesome"),
    new place("place", "Dach Event", "1020", "Taborstraße 1-3", "Wien", "Austria", "img/theEvent.jpg", new Date("2014-02-08 09:30"), "Unbeliveable view"),
    //Restaurants
    new restaurant("restaurant", "Steirereck", "1030", "Am Heumarkt 2A", "Wien", "Austria", "img/steirereck.jpeg", new Date("2014-02-08 09:30"), "A different world in the middle of the City-Park of Vienna", "+43 1 713 31 68", "wien@steirereck.at", "Modern", 100, "https://www.steirereck.at"),
    new restaurant("restaurant", "Azur Mendi", "48195", "Barrio Legina", "Larrabetzu", "Spain", "img/azurmendi.png", new Date("2011-02-08 09:30"), "Chef which cook like a god", "+34 94 455 83 59", " reservas@azurmendi.biz", "Molekular Avantgard", 30, "https://azurmendi.restaurant/en/"),
    new restaurant("restaurant", "Eleven Madison Park", "10010", "Madison Avenue 11", "New York", "USA", "img/eleven.jpg", new Date("2010-02-08 09:30"), "Undescribable food, amazing quality, the most friendliest service Team", "+43 1 713 31 68", "info@elevenmadisonpark.com", "Modern klassisch", 70, "https://www.elevenmadisonpark.com/"),
    new restaurant("restaurant", "Vendome", "51429", "Kaddettenstrasse", "Bergisch Gladbach", "Germany", "img/vendome.jpg", new Date("2009-02-08 09:30"), "The first time in my life, when I thought, I would die because of the amount of awesome dishes", "+49 2204 42 -0", "info@schlossbensberg.com", "Modern", 100, "https://www.schlossbensberg.com/de/restaurant-vendome"),
    // Events
    new eVent("event", "Stadthalle Wien", "1150", "Roland-Rainer-Platz 1", "Wien", "Austria", "img/bulent.jpg", new Date("2012-09-08 09:30"), "Very funny", "Bülent Ceylan", 38, "18.05.2018", "19.30"),
    new eVent("event", "Arena Wien", "1030", "Baumgasse 80", "Wien", "Austria", "img/faber.jpg", new Date("2013-12-08 22:30"), "One of the best Switzer singer", "Faber", 25, "07.02.2018", "20.30"),
    new eVent("event", "Stadthalle Wien", "1150", "Roland-Rainer-Platz 1", "Wien", "Austria", "img/kulis.jpg", new Date("2017-09-08 23:30"), "Funny Guy", "Gernot Kulus", 24.90, "09.06.2017", "20.00"),
    new eVent("event", "Stadthalle Wien", "1150", "Roland-Rainer-Platz 1", "Wien", "Austria", "img/africa.jpg", new Date("2018-02-08 12:30"), "Beautiful dresses and a great performance", "AfricaAfrica", 41.90, "04.05.2018", "19.30")
];
//For Loop for displaying the Elements----------------------------------------------------------------------------------------------------------------------------------
for (var _i = 0, whole_1 = whole; _i < whole_1.length; _i++) {
    var one = whole_1[_i];
    $("#contentRow").append(one.render());
}
//Sorting Function ----------------------------------------------------------------------------------------------------------------------------------
var $divs = $("div.itemContainer");
$('#ascBtn').on('click', function () {
    console.log("a");
    var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return parseInt(a.getAttribute("val")) > parseInt(b.getAttribute("val"));
    });
    $("#contentRow").hide().slideDown(450).html(numericallyOrderedDivs);
});
$('#dscBtn').on('click', function () {
    console.log("b");
    var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return parseInt(a.getAttribute("val")) < parseInt(b.getAttribute("val"));
    });
    $("#contentRow").hide().slideDown(450).html(numericallyOrderedDivs);
});
