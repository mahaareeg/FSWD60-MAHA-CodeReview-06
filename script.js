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
    function locations(city, zipCode, address, img, name) {
        this.city = "";
        this.address = "";
        this.img = "";
        this.name = "";
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        this.name = name;
    }
    return locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(city, zipCode, address, img, name, Sightseeing) {
        var _this = _super.call(this, city, zipCode, address, img, name) || this;
        _this.Sightseeing = "";
        _this.Sightseeing = Sightseeing;
        return _this;
    }
    return places;
}(locations));
var resturants = /** @class */ (function (_super) {
    __extends(resturants, _super);
    function resturants(city, zipCode, address, img, name, telephone) {
        var _this = _super.call(this, city, zipCode, address, img, name) || this;
        _this.telephone = telephone;
        return _this;
    }
    return resturants;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, zipCode, address, img, name, appointment, price) {
        var _this = _super.call(this, city, zipCode, address, img, name) || this;
        _this.appointment = "";
        _this.price = "";
        _this.appointment = appointment;
        _this.price = price;
        return _this;
    }
    return events;
}(locations));
var allloocations = new Array();
allloocations[0] = new places("Vienna", 1010, "Karlsplatz 1", "img/St-Charles.JPG", "St. Charles Church", "Church");
allloocations[1] = new places("Vienna", 1130, "Maxingstraße 13 b", "img/zoo.JPG", "Schoenbrunn-Zoo Vienna", "Zoo");
allloocations[2] = new resturants("Vienna", 1050, "Kettenbrückengasse 19", "img/lemonleaf.png", "Lemon Leaf Thai Restaurant", +4315812308);
allloocations[3] = new resturants("Vienna", 1050, "Schönbrunner Straße 21 ", "img/sixta.jpg", "SIXTA Restaurant", +4315852856);
allloocations[4] = new events("Vienna", 1150, "Roland Rainer Platz 1", "img/KrisK.jpg", "Kris Kristofferson", "Fr. 15.11.2019. 20:00", "58.50 EUR");
allloocations[5] = new events("Vienna", 1150, "Roland Rainer Platz 1", "img/Lenny.jpg", "Lenny Kravitz", "Sat 09.12.2019 19:30");
"€ 47.80";
;
