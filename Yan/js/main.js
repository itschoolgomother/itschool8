 function auth(mylogin,mypas){
 	 
	var login = prompt("Login:","admin")
	var pas = prompt("Password","#@(грн?$0")

	if(login == mylogin && pas ==mypas){
		alert("привет,"+login)
	}else{
		alert("пока")
	}

}
auth("a","1")



