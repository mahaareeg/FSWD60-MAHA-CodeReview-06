var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(city, zipCode, address, name, img) {
        this.city = "";
        this.address = "";
        this.name = "";
        this.img = "";
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.name = name;
        this.img = img;
    }
    locations.prototype.text = function () {
        return "Welcome to the beutiful city " + this.city + ", especially the first district " + this.zipCode + ", where you could see different historic places like St. Charles Church in " + this.address + ", in " + this.name + ", " + this.img;
    };
    return locations;
}());
var info = new locations("Vienna", 1010, "Karlsplatz 1", "Vienna City", "img/vienna.jpg");
document.write(info.text());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(city, zipCode, address, name, img, historic) {
        var _this = _super.call(this, city, zipCode, address, name, img) || this;
        _this.historic = ";";
        _this.historic = historic;
        return _this;
    }
    places.prototype.text1 = function () {
        return "<h2> Places: </h2> <br>  <h4> \u2022 " + this.name + "</h4><br> \u2022\u200A\n " + this.address + ", " + this.zipCode + ", " + this.city + " " + this.img + ", " + this.historic + " ";
    };
    return places;
}(locations));
var info11 = new places("Vienna", 1010, "Karlsplatz 1", "St. Charles Church", "img src='../img/St-Charles.JPG'", "Church");
var info13 = new places("Vienna", 1130, "Maxingstraße 13 b", "Schoenbrunn-Zoo Vienna", "img src='../img/zoo.JPG'", "Zoo");
document.write(info11.text1());
document.write(info13.text1());
var resturants = /** @class */ (function (_super) {
    __extends(resturants, _super);
    function resturants(city, zipCode, address, img, name, telephone) {
        var _this = _super.call(this, city, zipCode, address, name, img) || this;
        _this.telephone = telephone;
        return _this;
    }
    resturants.prototype.rest = function () {
        return "<h2> Resturants: </h2> <br>  <h4> \u2022 " + this.name + "</h4><br> \u2022\u200A" + this.address + ", " + this.zipCode + ", " + this.city + " " + this.img + ", " + this.telephone + " ";
    };
    return resturants;
}(locations));
var infores = new resturants("Vienna", 1050, "Kettenbrückengasse 19", "Lemon Leaf Thai Restaurant", "img/St-Charles.JPG'", 4315812308);
var infores3 = new resturants("Vienna", 1050, "Schönbrunner Straße 21 ", "SIXTA Restaurant", "img/sixta.jpg", 4315852856);
document.write(infores.rest());
document.write(infores3.rest());
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, zipCode, address, img, name, appointment, price) {
        var _this = _super.call(this, city, zipCode, address, name, img) || this;
        _this.appointment = "";
        _this.price = "";
        _this.appointment = appointment;
        _this.price = price;
        return _this;
    }
    events.prototype.evens = function () {
        return "<h2> Events: </h2> <br>  <h4> \u2022 " + this.name + "</h4><br> \u2022\u200A\n " + this.address + ", " + this.zipCode + ", " + this.city + " " + this.img + ", " + this.appointment + ", " + this.price + " ";
    };
    return events;
}(locations));
var infoeve = new events("Vienna", 1150, "Roland Rainer Platz 1", "Kris Kristofferson", "img/KrisK.jpg", "Fr. 15.11.2019. 20:00", "58.50 EUR");
var infoeve3 = new events("Vienna", 1150, "Roland Rainer Platz 1", "Lenny Kravitz", "img/Lenny.jpg", "Sat 09.12.2019 19:30", "€ 47.80");
document.write(infoeve.evens());
document.write(infoeve3.evens());
var alllocations = new Array();
alllocations[0] = new places("Vienna", 1010, "Karlsplatz 1", "St. Charles Church", "img/St-Charles.JPG", "Church");
alllocations[1] = new places("Vienna", 1130, "Maxingstraße 13 b", "Schoenbrunn-Zoo Vienna", "img/zoo.JPG", "Zoo");
alllocations[2] = new resturants("Vienna", 1050, "Kettenbrückengasse 19", "Lemon Leaf Thai Restaurant", "img/lemonleaf.jpg", 4315812308);
alllocations[3] = new resturants("Vienna", 1050, "Schönbrunner Straße 21 ", "SIXTA Restaurant", "img/sixta.jpg", 4315852856);
alllocations[4] = new events("Vienna", 1150, "Roland Rainer Platz 1", "Kris Kristofferson", "img/KrisK.jpg", "Fr. 15.11.2019. 20:00", "58.50 EUR");
alllocations[5] = new events("Vienna", 1150, "Roland Rainer Platz 1", "Lenny Kravitz", "img/Lenny.jpg", "Sat 09.12.2019 19:30", "€ 47.80");
