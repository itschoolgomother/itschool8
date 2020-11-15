let notaDo = new Audio();
notaDo.src = "noty-do.mp3";

document.getElementById("nDo")

document.addEventListener("keydown",playPiano)

function playPiano(e) {
switch(e.keyCode){
	case 90:
	notaDo.play();
	break;
}
}