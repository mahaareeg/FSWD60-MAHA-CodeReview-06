  class locations {
  city = "";
  zipCode : number;
  address = "";
  name = ""
  img = ""
 
 

  constructor(city,zipCode,address,name,img){
  this.city = city;
  this.zipCode = zipCode;
  this.address = address;
  this.name = name;
 this.img = img;



  }

 


 text(){
  return `Welcome to the beutiful city ${this.city}, especially the first district ${this.zipCode}, where you could see different historic places like St. Charles Church in ${this.address}, in ${this.name}, <img src="${this.image}"`;
 }

 }


  var info = new locations("Vienna", 1010, "Karlsplatz 1","Vienna City", "img/vienna.jpg"); 
  document.write(info.text());

 class places extends locations { 
 	historic = "";

constructor(city, zipCode, address, name, img, historic){
	super(city, zipCode, address, name, img);
	this.historic = historic;
	

}
text1(){
	return `<h2> Places: </h2> <br>  <h4> • ${this.name}</h4><br> • 
 ${this.address}, ${this.zipCode}, ${this.city}, ${this.img}, ${this.historic} `;
}


 }

  var info11 = new places("Vienna", 1010, "Karlsplatz 1", "St. Charles Church", "img/St-Charles.JPG'", "Church"); 
 var info13 = new places("Vienna", 1130, "Maxingstraße 13 b", "Schoenbrunn-Zoo Vienna", "img src='../img/zoo.JPG'", "Zoo"); 
  document.write(info11.text1());
  document.write(info13.text1());



 class resturants extends locations {
 	
 	telephone : number;

 	constructor(city, zipCode, address, img, name, telephone){
 		super(city, zipCode, address, name, img);

 		
 		this.telephone = telephone;

 	}

 	rest(){
	return `<h2> Resturants: </h2> <br>  <h4> • ${this.name}</h4><br> • ${this.address}, ${this.zipCode}, ${this.city} ${this.img}, ${this.telephone} `;
}



 }

var infores = new resturants("Vienna", 1050, "Kettenbrückengasse 19", "Lemon Leaf Thai Restaurant", "img/St-Charles.JPG'",  4315812308); 
 var infores3 = new resturants("Vienna", 1050, "Schönbrunner Straße 21 ", "SIXTA Restaurant", "img/sixta.jpg", 4315852856); 
  document.write(infores.rest());
  document.write(infores3.rest());


 class events extends locations {
 	
 	 appointment = "";
 	 price = "";

 constructor(city, zipCode, address, img, name, appointment, price){
 		super(city, zipCode, address, name, img);

 		this.appointment = appointment;
 		this.price = price;


 }
 evens(){
	return `<h2> Events: </h2> <br>  <h4> • ${this.name}</h4><br> • 
 ${this.address}, ${this.zipCode}, ${this.city} ${this.img}, ${this.appointment}, ${this.price} `;
}
 
}

var infoeve = new events("Vienna", 1150,  "Roland Rainer Platz 1", "Kris Kristofferson", "img/KrisK.jpg", "Fr. 15.11.2019. 20:00", "58.50 EUR"); 
 var infoeve3 = new events("Vienna",1150, "Roland Rainer Platz 1", "Lenny Kravitz", "img/Lenny.jpg", "Sat 09.12.2019 19:30", "€ 47.80"); 
  document.write(infoeve.evens());
  document.write(infoeve3.evens());

var alllocations = new Array();

alllocations[0] = new places("Vienna", 1010, "Karlsplatz 1", "St. Charles Church", "img/St-Charles.JPG", "Church");
alllocations[1] = new places("Vienna", 1130, "Maxingstraße 13 b", "Schoenbrunn-Zoo Vienna", "img/zoo.JPG", "Zoo");
alllocations[2] = new resturants("Vienna", 1050, "Kettenbrückengasse 19", "Lemon Leaf Thai Restaurant", "img/lemonleaf.jpg", 4315812308);
alllocations[3] = new resturants("Vienna", 1050, "Schönbrunner Straße 21 ", "SIXTA Restaurant", "img/sixta.jpg", 4315852856);
alllocations[4] = new events("Vienna", 1150,  "Roland Rainer Platz 1", "Kris Kristofferson", "img/KrisK.jpg", "Fr. 15.11.2019. 20:00", "58.50 EUR");
alllocations[5] = new events("Vienna", 1150, "Roland Rainer Platz 1", "Lenny Kravitz", "img/Lenny.jpg", "Sat 09.12.2019 19:30", "€ 47.80");







