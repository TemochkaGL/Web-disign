let x = 1;
const privet = document.getElementById('privet');

privet.onclick = function() {
	var a = prompt ("Как Ваше имя?");
	if (a!=null) {
	alert("Приветствую, "+a+".")
	} 
}

//2 блок
const shripht = document.getElementById('shripht');
const fon = document.getElementById('fon');
const razmer = document.getElementById('razmer');

const div_block = document.getElementsByClassName("block1")[0];
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const p1 = document.getElementById('p1');

shripht.onclick = function(){
	div_block.setAttribute("style", "font-family: monospace;")
}

fon.onclick = function(){
	div_block.setAttribute("style", "background: var(--onyx); border-color:var(--onyx);")
}

razmer.onclick = function(){
	p1.setAttribute("style", "width: 40%;")
}