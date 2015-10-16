

var username;
var city;
var favcolor;
var age;

var nameLabel;
var nameCity;
var nameColor;
var nameAge;

var printAge;
var printName;
var printCity;
var printColor;

var button;
var returnbutton;

function setup() {

  noCanvas();

  nameLabel = createElement("h2","What is your name?");
  username = createInput();

  nameCity = createElement("h2","Which city you came from?");
  city = createInput();

  nameColor = createElement("h2","What is your favorite color?");
  favcolor = createInput();

  nameAge = createElement("h2","How old are you?");
  age = createInput();

  button = createButton("Submit!");
  button.mouseOver(mouseHover);
  button.mouseOut(mouseAway);
  button.mousePressed(createProfile);




}

function mouseHover(){
	button.style("background-color","blue");
}

function mouseAway(){
	button.style("background-color","white");
}

function mouseHover2(){
	returnbutton.style("background-color","red");
}

function mouseAway2(){
	returnbutton.style("background-color","white");
}

function createProfile(){
	var givenName = username.value();
	var givenCity = city.value();
	var givenColor = favcolor.value();
	var givenAge = age.value();

	username.hide();
	city.hide();
	favcolor.hide();
	age.hide();
	nameLabel.hide();
	nameCity.hide();
	nameColor.hide();
	nameAge.hide();
	button.hide();


	var randomsize1 = random(100,200);
	var randomsize2 = random(40,100);
	var randomsize3 = random(40,100);
	var randomsize4 = random(300,1000);

	var printAge = createElement("h2",givenAge);
	printAge.style("font-size",randomsize4+"px");
	printAge.style("color","#EBFFFF");
	printAge.position(1,1);
	
	var printName = createElement("h2",givenName);
	printName.style("font-size",randomsize1+"px");
	printName.position(300,120);
	
	for ( var x = 0; x < windowWidth; x += 300){
		var printCity = createElement("h2",givenCity);
		printCity.position(x,50);
		printCity.style("font-size",randomsize2 + "px");
		printCity.style("color","#00A6CF");
		printCity.style("font-family","Bodoni");
	}

	
	
	for ( var y = 0; y < windowWidth; y += 300){
		var printColor = createElement("h2",givenColor);
		printColor.position(y,400);
		printColor.style("font-size",randomsize3 +"px");
		printColor.style("color","white");
		printColor.style("font-family","Bodoni");

	}

	returnbutton = createButton("Enter more");
	returnbutton.mouseOver(mouseHover2);
  	returnbutton.mouseOut(mouseAway2);
  	returnbutton.mousePressed(returnPage);

}

function returnPage(){


	//printName.hide();
	//printCity.hide();
	//printColor.hide();
	//printAge.hide();
	//returnbutton.hide();

	

	username.show();
	city.show();
	favcolor.show();
	age.show();
	nameLabel.show();
	nameCity.show();
	nameColor.show();
	nameAge.show();
	button.show();
	returnbutton.hide();

}
