var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#colortwo");

color2 = color2.value;

color1.addEventListener("input", function() {
	console.log(color1.value);
});

colortwo.addEventListener("input", function() {
	console.log(colortwo.value);
});
