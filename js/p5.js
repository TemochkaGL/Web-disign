let x = 1;
const znach_x = document.getElementById('znach_x');
const otvet = document.getElementById('sum');

function suma() {
	let y = String(Math.tan(x)/Math.sqrt(x));
	if (x!=2) {
	otvet.textContent = 'Результат = ' + y;
	console.log(y);}
	else{
		otvet.textContent = 'х = 2 - недопустимо.';
	}
}

function yvel(){
	x = x + 1;
	znach_x.textContent ="x = "+ x;
}