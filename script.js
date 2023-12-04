const button_dot = document.getElementById("dot");
const button_dash = document.getElementById("dash");
const field_input = document.getElementById("input");

var ref = { 
	'.-':     'a',
	'-...':   'b',
	'-.-.':   'c',
	'-..':    'd',
	'.':      'e',
	'..-.':   'f',
	'--.':    'g',
	'....':   'h',
	'..':     'i',
	'.---':   'j',
	'-.-':    'k',
	'.-..':   'l',
	'--':     'm',
	'-.':     'n',
	'---':    'o',
	'.--.':   'p',
	'--.-':   'q',
	'.-.':    'r',
	'...':    's',
	'-':      't',
	'..-':    'u',
	'...-':   'v',
	'.--':    'w',
	'-..-':   'x',
	'-.--':   'y',
	'--..':   'z',
	'.----':  '1',
	'..---':  '2',
	'...--':  '3',
	'....-':  '4',
	'.....':  '5',
	'-....':  '6',
	'--...':  '7',
	'---..':  '8',
	'----.':  '9',
	'-----':  '0',
};


button_dot.myType = "dot"
button_dash.myType = "dash"

button_dot.addEventListener("click", handleClick)
button_dash.addEventListener("click", handleClick)

var timeoutHandle;
field_input.innerHTML = ""


function handleClick(event) {
	if (event.currentTarget.myType === "dot") {
		input.innerHTML += "."
	} else {
		input.innerHTML += "-"
	}
	clearTimeout(timeoutHandle);
	timeoutHandle = setTimeout(parseMorse, 1000);
}

function parseMorse() {
	console.log(field_input.innerHTML);
	console.log(ref[field_input.innerHTML]);
	field_input.innerHTML = "";
}

function draw() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = "rgb(200, 0, 0)";
	ctx.fillRect(10, 10, 50, 50);

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(30, 30, 50, 50);
}

