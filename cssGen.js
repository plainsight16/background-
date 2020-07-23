var header= document.querySelector("h1");
var body= document.querySelector("body");
var css= document.querySelector("h3");
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');

function changeColor(){
	body.style.background="linear-gradient(to-right, "+color1.value+", "+color2.value+")";
}


color1.addEventListener("input", changeColor);
color2.addEventListener("input",changeColor);
css.document.innerHTML("linear-gradient(to-right, "+color1.value+", "+color2.value+");");
