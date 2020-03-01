// var test = document.getElementById("box");
// var colors = ["red","green","blue","indigo","gold"];



// test.style.backgroundColor = colors[4];
// test.style.width = "100px"
// test.style.height = "100px"

// alert("hi world");
// console.log("123123123123132");
// alert(String.fromCharCode(97))
// alert("Dima".charCodeAt(0))
var text = "привет"
var letters = text.split("")
var shifr = []
var option = prompt("1 or 2","1");


for(var i = 0; i<letters.length;i++){
	 var code = letters[i].charCodeAt(0)
	if(option == "2"){
		code += 10
	}else{
		alert("error")
	}

 	shifr.push(String.fromCharCode(code))
}

console.log(shifr)





// String.fromCharCode(97)    