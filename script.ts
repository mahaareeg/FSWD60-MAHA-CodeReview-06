class locations {
 city = "";
 zipCode : number;
 address = "";
 img = "";
 name = "";

 constructor(city, zipCode, address, img, name
 	){
this.city = city;
this.zipCode = zipCode;
this.address = address;
this.img = img;
this.name = name;

 }


}
 class places extends locations {

Sightseeing = "";

constructor(city, zipCode, address, img, name, Sightseeing){
	super(city, zipCode, address, img, name);
	this.Sightseeing = Sightseeing;

}



 }

 class resturants extends locations {
 	telephone : number;

 	constructor(city, zipCode, address, img, name, telephone){
 		super(city, zipCode, address, img, name);
 		this.telephone = telephone;

 	}
 }
 class events extends locations {

 	appointment = "";
 	price = "";

 constructor(city, zipCode, address, img, name, appointment, price){
 		super(city, zipCode, address, img, name);
 		this.appointment = appointment;
 		this.price = price;


 }
}
var allloocations = new Array();

allloocations[0] = new places( "Vienna", 1010, "Karlsplatz 1", "img/St-Charles.JPG", "St. Charles Church", "Church" );
allloocations[1] = new places( "Vienna", 1130, "Maxingstraße 13 b", "img/zoo.JPG", "Schoenbrunn-Zoo Vienna", "Zoo");
allloocations[2] = new resturants( "Vienna", 1050, "Kettenbrückengasse 19", "img/lemonleaf.png", "Lemon Leaf Thai Restaurant", +4315812308);
allloocations[3] = new resturants( "Vienna", 1050, "Schönbrunner Straße 21 ", "img/sixta.jpg", "SIXTA Restaurant", +4315852856);
allloocations[4] = new events( "Vienna", 1150,  "Roland Rainer Platz 1", "img/KrisK.jpg", "Kris Kristofferson", "Fr. 15.11.2019. 20:00", "58.50 EUR" );
allloocations[5] = new events( "Vienna", 1150, "Roland Rainer Platz 1", "img/Lenny.jpg", "Lenny Kravitz", "Sat 09.12.2019 19:30"; "€ 47.80");







