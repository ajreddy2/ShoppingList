var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items=document.getElementsByTagName("li");
var deleteButtons=document.getElementsByClassName("btn btn-dark");

for(var i=0;i<items.length;i++){
	items[i].addEventListener("click",strikeOffItem);
}
for(var i=0;i<deleteButtons.length;i++){
	deleteButtons[i].addEventListener("click",deleteItem);
}
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.className="list-group-item";
	li.appendChild(document.createTextNode(input.value));
	var button=document.createElement("button");
	button.className="btn btn-danger";
	button.appendChild(document.createTextNode("Remove"));
	button.addEventListener("click",deleteItem);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeOffItem(event){
	event.target.classList.toggle("done");
}

function deleteItem(event){
	event.target.removeEventListener("click",deleteItem);
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
