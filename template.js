var remName = document.getElementById("remname")
var remAge = document.getElementById("remage")

var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")

const cf1 = document.getElementById("cf1")
var rbut1 = document.getElementById("rbut1")

var fase1 = document.getElementById("fase1")
var ul1 = document.getElementById("ul1")
var fase1d = document.getElementById("fase1d")

var dellast1 = document.getElementById("dellast1")
var dellast2 = document.getElementById("dellast2")
var dellast3 = document.getElementById("dellast3")




var input21 = document.getElementById("input21")
var input22 = document.getElementById("input22")
var input23 = document.getElementById("input23")

const cf2 = document.getElementById("cf2")
var rbut2 = document.getElementById("rbut2")

var fase2 = document.getElementById("fase2")
var ul2 = document.getElementById("ul2")
var fase2d = document.getElementById("fase2d")

var dellast31 = document.getElementById("dellast31")
var dellast32 = document.getElementById("dellast32")
var dellast33 = document.getElementById("dellast33")




var input31 = document.getElementById("input31")
var input32 = document.getElementById("input32")
var input33 = document.getElementById("input33")

const cf3 = document.getElementById("cf3")
var rbut3 = document.getElementById("rbut3")

var fase3 = document.getElementById("fase3")
var ul3 = document.getElementById("ul3")
var fase3d = document.getElementById("fase3d")

var dellast31 = document.getElementById("dellast31")
var dellast32 = document.getElementById("dellast32")
var dellast33 = document.getElementById("dellast33")



var input41 = document.getElementById("input41")
var input42 = document.getElementById("input42")
var input43 = document.getElementById("input43")

const cf4 = document.getElementById("cf4")
var rbut4 = document.getElementById("rbut4")

var fase4 = document.getElementById("fase4")
var ul4 = document.getElementById("ul4")
var fase4d = document.getElementById("fase4d")


var dellast41 = document.getElementById("dellast41")
var dellast42 = document.getElementById("dellast42")
var dellast43 = document.getElementById("dellast43")




var input51 = document.getElementById("input51")
var input52 = document.getElementById("input52")
var input53 = document.getElementById("input53")

const cf5 = document.getElementById("cf5")
var rbut5 = document.getElementById("rbut5")

var fase5 = document.getElementById("fase5")
var ul5 = document.getElementById("ul5")
var fase5d = document.getElementById("fase5d")


var dellast51 = document.getElementById("dellast51")
var dellast52 = document.getElementById("dellast52")
var dellast53 = document.getElementById("dellast53")



var input61 = document.getElementById("input61")
var input62 = document.getElementById("input62")
var input63 = document.getElementById("input63")

const cf6 = document.getElementById("cf6")
var rbut6 = document.getElementById("rbut6")

var fase6 = document.getElementById("fase6")
var ul6 = document.getElementById("ul6")
var fase6d = document.getElementById("fase6d")


var dellast61 = document.getElementById("dellast61")
var dellast62 = document.getElementById("dellast62")
var dellast63 = document.getElementById("dellast63")



var input71 = document.getElementById("input71")
var input72 = document.getElementById("input72")
var input73 = document.getElementById("input73")

const cf7 = document.getElementById("cf7")
var rbut7 = document.getElementById("rbut7")

var fase7 = document.getElementById("fase7")
var ul7 = document.getElementById("ul7")
var fase7d = document.getElementById("fase7d")


var dellast71 = document.getElementById("dellast71")
var dellast72 = document.getElementById("dellast72")
var dellast73 = document.getElementById("dellast73")

const printButton = document.getElementById("printbutton")

var encabezado = document.getElementById("inputgaspon")
var encabezado2 = document.getElementById("inputgaspon2")
var nombre = document.getElementById("nombre")
var edad = document.getElementById("edad")


const printDelete = document.querySelector('#printdelete');
const printDelete2 = document.querySelector('#printdelete2');
const printDelete3 = document.querySelector('#printdelete3');
const printDelete4 = document.querySelector('#printdelete4');
const printDelete5 = document.querySelector('#printdelete5');
const printDelete6 = document.querySelector('#printdelete6');
const printDelete7 = document.querySelector('#printdelete7');
const printDelete0 = document.querySelector('#printdelete0');

const resettodo = document.getElementById("resettodo");
const alimentacion = document.getElementsByClassName("alimentacion");


resettodo.addEventListener("click", function(event) {
	fase1.textContent="";
	fase2.textContent="";
	fase3.textContent="";
	fase4.textContent="";
	fase5.textContent="";
	fase6.textContent="";
	fase7.textContent="";
	fase1d.textContent="";
	fase2d.textContent="";
	fase3d.textContent="";
	fase4d.textContent="";
	fase5d.textContent="";
	fase6d.textContent="";
	fase7d.textContent="";

})


encabezado.addEventListener("keypress", function(event) {
	if (encabezado.value.length > 0 && event.keyCode === 13) {
		var h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(encabezado.value))
		nombre.appendChild(h2);
		encabezado.value = "";
	}
})

encabezado2.addEventListener("keypress", function(event) {
	if (encabezado2.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(encabezado2.value))
		edad.appendChild(h3);
		encabezado2.value = "";
	}
})

remName.addEventListener("click", function() {
	nombre.removeChild(nombre.lastElementChild);
})

remAge.addEventListener("click", function() {
	edad.removeChild(edad.lastElementChild);
})

input1.addEventListener("keypress", function(event) {
	if (input1.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input1.value))
		fase1.appendChild(h3);
		input1.value = "";
	}
})

input2.addEventListener("keypress", function(event) {
	if (input2.value.length > 0 && event.keyCode === 13) {
		var li2 = document.createElement("li");
		li2.appendChild(document.createTextNode(input2.value))
		ul1.appendChild(li2);
		input2.value = "";
	}
})



input3.addEventListener("keypress", function(event) {
	if (input3.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input3.value))
		fase1d.appendChild(h4);
		input3.value = "";
	}
})

rbut1.addEventListener("click", function() {
	cf1.remove();
	printDelete.remove();
})



dellast1.addEventListener("click", function() {
	fase1.removeChild(fase1.lastElementChild);
})

dellast2.addEventListener("click", function() {
	ul1.removeChild(ul1.lastElementChild);
})

dellast3.addEventListener("click", function() {
	fase1d.removeChild(fase1d.lastElementChild);
})





*/---------------------/



input21.addEventListener("keypress", function(event) {
	if (input21.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input21.value))
		fase2.appendChild(h3);
		input21.value = "";
	}
})

input22.addEventListener("keypress", function(event) {
	if (input22.value.length > 0 && event.keyCode === 13) {
		var li2 = document.createElement("li");
		li2.appendChild(document.createTextNode(input22.value))
		ul2.appendChild(li2);
		input22.value = "";
	}
})



input23.addEventListener("keypress", function(event) {
	if (input23.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input23.value))
		fase2d.appendChild(h4);
		input23.value = "";
	}
})

rbut2.addEventListener("click", function() {
	cf2.remove();
	printDelete2.remove();
})


dellast21.addEventListener("click", function() {
	fase2.removeChild(fase2.lastElementChild);
})

dellast22.addEventListener("click", function() {
	ul2.removeChild(ul2.lastElementChild);
})

dellast23.addEventListener("click", function() {
	fase2d.removeChild(fase2d.lastElementChild);
})




*/---------------------/


input31.addEventListener("keypress", function(event) {
	if (input31.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input31.value))
		fase3.appendChild(h3);
		input31.value = "";
	}
})

input32.addEventListener("keypress", function(event) {
	if (input32.value.length > 0 && event.keyCode === 13) {
		var li3 = document.createElement("li");
		li3.appendChild(document.createTextNode(input32.value))
		ul3.appendChild(li3);
		input32.value = "";
	}
})



input33.addEventListener("keypress", function(event) {
	if (input33.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input33.value))
		fase3d.appendChild(h4);
		input33.value = "";
	}
})

rbut3.addEventListener("click", function() {
	cf3.remove();
	printDelete3.remove();
})


dellast31.addEventListener("click", function() {
	fase3.removeChild(fase3.lastElementChild);
})

dellast32.addEventListener("click", function() {
	ul3.removeChild(ul3.lastElementChild);
})

dellast33.addEventListener("click", function() {
	fase3d.removeChild(fase3d.lastElementChild);
})



*/---------------------/



input41.addEventListener("keypress", function(event) {
	if (input41.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input41.value))
		fase4.appendChild(h3);
		input41.value = "";
	}
})

input42.addEventListener("keypress", function(event) {
	if (input42.value.length > 0 && event.keyCode === 13) {
		var li3 = document.createElement("li");
		li3.appendChild(document.createTextNode(input42.value))
		ul4.appendChild(li3);
		input42.value = "";
	}
})



input43.addEventListener("keypress", function(event) {
	if (input43.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input43.value))
		fase4d.appendChild(h4);
		input43.value = "";
	}
})

rbut4.addEventListener("click", function() {
	cf4.remove();
	printDelete4.remove();
})


dellast41.addEventListener("click", function() {
	fase4.removeChild(fase4.lastElementChild);
})

dellast42.addEventListener("click", function() {
	ul4.removeChild(ul4.lastElementChild);
})

dellast43.addEventListener("click", function() {
	fase4d.removeChild(fase4d.lastElementChild);
})




*/---------------------/



input51.addEventListener("keypress", function(event) {
	if (input51.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input51.value))
		fase5.appendChild(h3);
		input51.value = "";
	}
})

input52.addEventListener("keypress", function(event) {
	if (input52.value.length > 0 && event.keyCode === 13) {
		var li3 = document.createElement("li");
		li3.appendChild(document.createTextNode(input52.value))
		ul5.appendChild(li3);
		input52.value = "";
	}
})



input53.addEventListener("keypress", function(event) {
	if (input53.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input53.value))
		fase5d.appendChild(h4);
		input53.value = "";
	}
})

rbut5.addEventListener("click", function() {
	cf5.remove();
	printDelete5.remove();
})


dellast51.addEventListener("click", function() {
	fase5.removeChild(fase5.lastElementChild);
})

dellast52.addEventListener("click", function() {
	ul5.removeChild(ul5.lastElementChild);
})

dellast53.addEventListener("click", function() {
	fase5d.removeChild(fase5d.lastElementChild);
})




*/---------------------/



input61.addEventListener("keypress", function(event) {
	if (input61.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input61.value))
		fase6.appendChild(h3);
		input61.value = "";
	}
})

input62.addEventListener("keypress", function(event) {
	if (input62.value.length > 0 && event.keyCode === 13) {
		var li3 = document.createElement("li");
		li3.appendChild(document.createTextNode(input62.value))
		ul6.appendChild(li3);
		input62.value = "";
	}
})



input63.addEventListener("keypress", function(event) {
	if (input63.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input63.value))
		fase6d.appendChild(h4);
		input63.value = "";
	}
})

rbut6.addEventListener("click", function() {
	cf6.remove();
	printDelete6.remove();
})


dellast61.addEventListener("click", function() {
	fase6.removeChild(fase6.lastElementChild);
})

dellast62.addEventListener("click", function() {
	ul6.removeChild(ul6.lastElementChild);
})

dellast63.addEventListener("click", function() {
	fase6d.removeChild(fase6d.lastElementChild);
})




*/---------------------/



input71.addEventListener("keypress", function(event) {
	if (input71.value.length > 0 && event.keyCode === 13) {
		var h3 = document.createElement("h3");
		h3.appendChild(document.createTextNode(input71.value))
		fase7.appendChild(h3);
		input71.value = "";
	}
})

input72.addEventListener("keypress", function(event) {
	if (input72.value.length > 0 && event.keyCode === 13) {
		var li3 = document.createElement("li");
		li3.appendChild(document.createTextNode(input72.value))
		ul7.appendChild(li3);
		input72.value = "";
	}
})



input73.addEventListener("keypress", function(event) {
	if (input73.value.length > 0 && event.keyCode === 13) {
		var h4 = document.createElement("h4");
		h4.appendChild(document.createTextNode(input73.value))
		fase7d.appendChild(h4);
		input73.value = "";
	}
})

rbut7.addEventListener("click", function() {
	cf7.remove();
	printDelete7.remove();
})


dellast71.addEventListener("click", function() {
	fase7.removeChild(fase7.lastElementChild);
})

dellast72.addEventListener("click", function() {
	ul7.removeChild(ul7.lastElementChild);
})

dellast73.addEventListener("click", function() {
	fase7d.removeChild(fase7d.lastElementChild);
})




*/---------------------/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



printButton.addEventListener("click", function() {
	removeAllChildNodes(printDelete);
	removeAllChildNodes(printDelete2);
	removeAllChildNodes(printDelete3);
	removeAllChildNodes(printDelete4);
	removeAllChildNodes(printDelete5);
	removeAllChildNodes(printDelete6);
	removeAllChildNodes(printDelete7);
	removeAllChildNodes(printDelete0);
	printButton.remove();
	resettodo.remove();
})
