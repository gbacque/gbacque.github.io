var botones = document.getElementsByClassName("mybutton")

var addItem = document.getElementById("additem")

var botonList = Array.prototype.slice.call( botones )


addItem.addEventListener("click", function() {
	var newBreak = document.createElement("br");
	var newButton = document.createElement("button");
	newButton.innerText = "Button ";
	newButton.classList.add("mybutton");
	document.body.appendChild(newBreak);
	document.body.appendChild(newButton);
	var botones = document.getElementsByClassName("mybutton");
	var botonList = Array.prototype.slice.call( botones );
})

for(var i = 0; i < botonList.length; i++) {
	botonList[i].addEventListener("click",function() {
		this.remove();
});
}





