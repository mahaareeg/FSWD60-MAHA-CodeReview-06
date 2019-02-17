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
        return "<div class=\"container\"> <h1> VIENNA-AUSTRIA </h1> <p>Welcome to the beutiful city " + this.city + ", especially the first district " + this.zipCode + ", <br>where you could see different historic places like St. Charles Church in " + this.address + ", in " + this.name + "</p>,<div class=\"image\"> <img src=\"" + this.img + "\"></div> </div>";
    };
    return locations;
}());
var info = new locations("Vienna", 1010, "Karlsplatz 1", "Vienna City", "img/vienna.jpg");
document.write(info.text());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(city, zipCode, address, name, img, historic) {
        var _this = _super.call(this, city, zipCode, address, name, img) || this;
        _this.historic = "";
        _this.historic = historic;
        return _this;
    }
    places.prototype.text1 = function () {
        return "<br><br> <div class=\"row\"> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <h2> Places: </h2></div><div class=\"col-lg-3 col-md-6 col-sm-12\">  <h4> \u2022 " + this.name + "</h4> </div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> \u2022\u200A\n " + this.address + ", " + this.zipCode + ", " + this.city + ", </div><div class=\"col-lg-3 col-md-6 col-sm-12\"><img src=\"" + this.img + "\">, " + this.historic + " </div></div> ";
    };
    places.prototype.text343 = function () {
        return "<br>  <br> <div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-12\"> <p> </p></div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <h4> \u2022 " + this.name + "</h4> </div> <div class=\"col-lg-3 col-md-6 col-sm-12\">\u2022\u200A\n " + this.address + ", " + this.zipCode + ", " + this.city + ",</div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <img src=\"" + this.img + "\">, " + this.historic + " </div></div> ";
    };
    return places;
}(locations));
var info11 = new places("Vienna", 1010, "Karlsplatz 1", "St. Charles Church", "img/St-Charles.JPG", "Church");
var info13 = new places("Vienna", 1130, "Maxingstraße 13 b", "Schoenbrunn-Zoo Vienna", "img/zoo.JPG", "Zoo");
document.write(info11.text1());
document.write(info13.text343());
var resturants = /** @class */ (function (_super) {
    __extends(resturants, _super);
    function resturants(city, zipCode, address, name, img, telephone) {
        var _this = _super.call(this, city, zipCode, address, name, img) || this;
        _this.telephone = telephone;
        return _this;
    }
    resturants.prototype.rest22 = function () {
        return "<br> <br> <div class=\"row\"> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <h2> Resturants: </h2></div> <div class=\"col-lg-3 col-md-6 col-sm-12\">  <h4> \u2022 " + this.name + "</h4> </div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> \u2022\u200A" + this.address + ", " + this.zipCode + "," + this.city + ",</div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <img src=\"" + this.img + "\">, " + this.telephone + " </div></div> ";
    };
    resturants.prototype.restt444 = function () {
        return "<br>  <br> <div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-12\"> <p> </p></div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> \u2022 " + this.name + "</h4></div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> \u2022\u200A" + this.address + ", " + this.zipCode + "," + this.city + ",</div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <img src=\"" + this.img + "\">, " + this.telephone + " </div></div> ";
    };
    return resturants;
}(locations));
var inforce = new resturants("Vienna", 1050, "Kettenbrückengasse 19", "Lemon Leaf Thai Restaurant", "img/lemonleaf.jpg", 4315812308);
var infart = new resturants("Vienna", 1050, "Schönbrunner Straße 21", "SIXTA Restaurant", "img/sixta.jpg", 4315852856);
document.write(inforce.rest22());
document.write(infart.restt444());
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, zipCode, address, name, img, appointment, price) {
        var _this = _super.call(this, city, zipCode, address, name, img) || this;
        _this.appointment = "";
        _this.price = "";
        _this.appointment = appointment;
        _this.price = price;
        return _this;
    }
    events.prototype.evenn = function () {
        return "<br><br> <div class=\"row\"> <div class=\"col-lg-3 col-md-6 col-sm-12\"><h2> Events: </h2></div> <div class=\"col-lg-3 col-md-6 col-sm-12\">  <h4> \u2022 " + this.name + "</h4></div>  <div class=\"col-lg-3 col-md-6 col-sm-12\"> \u2022\u200A" + this.address + ", " + this.zipCode + ", " + this.city + ", </div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <img src=\"" + this.img + "\">, " + this.appointment + ", " + this.price + " </div></div>";
    };
    events.prototype.evenn22 = function () {
        return " <br>  <br> <div class=\"row\"> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <p> </p> </div> <div class=\"col-lg-3 col-md-6 col-sm-12\">\u2022 " + this.name + "</h4></div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> \u2022\u200A" + this.address + ", " + this.zipCode + ", " + this.city + ", </div> <div class=\"col-lg-3 col-md-6 col-sm-12\"> <img src=\"" + this.img + "\">, " + this.appointment + ", " + this.price + " </div></div> ";
    };
    return events;
}(locations));
var infoeve22 = new events("Vienna", 1150, "Roland Rainer Platz 1", "Kris Kristofferson", "img/KrisK.JPG", "Fr. 15.11.2019. 20:00", "58.50 EUR");
var infoeve333 = new events("Vienna", 1150, "Roland Rainer Platz 1", "Lenny Kravitz", "img/Lenny.JPG", "Sat 09.12.2019 19:30", "€ 47.80");
document.write(infoeve22.evenn());
document.write(infoeve333.evenn22());
