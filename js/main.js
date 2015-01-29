var Game = {

	country:
	[
		{name: "America"},
		{name: "Arabia"},
		{name: "Assyria"},
		{name: "Austria"},
		{name: "Aztec"},
		{name: "Babylon"},
		{name: "Brazil"},
		{name: "Byzantine"},
		{name: "Carthage"},
		{name: "Celt"},
		{name: "China"},
		{name: "Denmark"},
		{name: "Netherland"},
		{name: "Egypt"},
		{name: "England"},
		{name: "Ethiopia"},
		{name: "France"},
		{name: "Germany"},
		{name: "Greece"},
		{name: "Hun"},
		{name: "Inca"},
		{name: "India"},
		{name: "Indonesia"},
		{name: "Iroquois"},
		{name: "Japan"},
		{name: "Korea"},
		{name: "Maya"},
		{name: "Mongolia"},
		{name: "Morocco"},
		{name: "Ottoman"},
		{name: "Persia"},
		{name: "Poland"},
		{name: "Polynesia"},
		{name: "Portugal"},
		{name: "Rome"},
		{name: "Russia"},
		{name: "Shoshone"},
		{name: "Siam"},
		{name: "Songhai"},
		{name: "Spain"},
		{name: "Sweden"},
		{name: "Venice"},
		{name: "Zulu"}
	],

	style:
	[
		"Domination", "Culture", "Science", "Diplomatic", "Time"
	],

	Init: function()
	{	
		Game.Generate();
	},

	Generate: function()
	{
		randCountry = Game.country[Math.floor(Math.random() * Game.country.length)];
		randStyle = Game.style[Math.floor(Math.random() * Game.style.length)];
		//This awful mess is to get the name of the country, and insert it with a <img/> tag
		countryImage = "<img src=img/"+randCountry.name+".png"+" />";
		document.getElementById("country").innerHTML = randCountry.name;
		document.getElementById("image").innerHTML = countryImage;
		document.getElementById("style").innerHTML = randStyle + " Victory";

	}

};

window.onload = Game.Init();