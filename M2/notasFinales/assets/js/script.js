// AVERAGE

var finalAverages = [];

// USER

var student = document.getElementById("student");
var career = document.getElementById("career");

var studentName = prompt("Ingrese su nombre completo:", "");
var careerName = prompt("Ingrese nombre de la carrera:", "");

student.innerHTML = studentName;
career.innerHTML = careerName;

// HTML

var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");
var htmlAverage = document.getElementById("htmlAverage");

var note1Html = Number(prompt("Ingrese la nota 1 de [HTML]:", ""));
var note2Html = Number(prompt("Ingrese la Nota 2 de [HTML]:"));
var note3Html = Number(prompt("Ingrese la Nota 3 de [HTML]:"));
finalAverages.push(Number(((note1Html + note2Html + note3Html) / 3).toFixed(2)));

html1.innerHTML = note1Html;
html2.innerHTML = note2Html;
html3.innerHTML = note3Html;
htmlAverage.innerHTML = finalAverages[0];

// CSS

var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");
var cssAverage = document.getElementById("cssAverage");

var note1Css = Number(prompt("Ingrese la Nota 1 de [Css]:"));
var note2Css = Number(prompt("Ingrese la Nota 2 de [Css]:"));
var note3Css = Number(prompt("Ingrese la nota 3 de [Css]:"));
finalAverages.push(Number(((note1Css + note2Css + note3Css) / 3).toFixed(2)));

css1.innerHTML = note1Css;
css2.innerHTML = note2Css;
css3.innerHTML = note3Css;

cssAverage.innerHTML = finalAverages[1];

// JAVASCRIPT

var js1 = document.getElementById("javascript1");
var js2 = document.getElementById("javascript2");
var js3 = document.getElementById("javascript3");
var jsAverage = document.getElementById("javascriptAverage");

var note1Js = Number(prompt("Ingrese la Nota 1 de [Javascript]:"));
var note2Js = Number(prompt("Ingrese la Nota 2 de [Javascript]:"));
var note3Js = Number(prompt("Ingrese la nota 3 de [Javascript]:"));

finalAverages.push(Number(((note1Js + note2Js + note3Js) / 3).toFixed(2)));

js1.innerHTML = note1Js;
js2.innerHTML = note2Js;
js3.innerHTML = note3Js;

jsAverage.innerHTML = finalAverages[2];

// Promedio Final

var refFinalAverage = document.getElementById("finalAverage");
var average =
	finalAverages.reduce((accumulator, current) => accumulator + current, 0) / finalAverages.length;

refFinalAverage.innerHTML = average.toFixed(2);
