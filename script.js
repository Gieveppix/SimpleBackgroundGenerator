var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; //nesmije bit semikolon iz nekog jebenog razloga
	h3.textContent = body.style.background + ";";
}

// function cssLine(event) {				Ko te jebe
// 	var h3 = document.getElementById("h3");
// 	var line = document.createTextNode("CLLLLLLRRR");
// 	h3.appendChild(line);
// 	var line1 = document.createTextNode("background: linear-gradient(to right, " + value1 + ", "+ value2 +");");
// 	h3.appendChild(line1);
// }

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
