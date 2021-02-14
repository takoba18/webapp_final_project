import {Database} from "./database.js"
 export	
 	const LoginContent =
	`
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
	<div>
	<div id="error_message">

	</div>
</div>
    <button class="btn-login"id="login" type="submit">Login</button>
   
  </div>
    `;

	var users = new Database('users')
	
	function login() {
		
		var user = users.get('username', document.getElementsByName("uname")[0].value)
		if(user==null){		
			console.log('user not found');
			document.getElementById('error_message').innerHTML="User doesn't exist";
		} else{
		if (user.password == document.getElementsByName("psw")[0].value) {
			localStorage.setItem('status', 'loggedin')
			window.location.href="#forum"				
		} else {
			console.log('wrong password');
			document.getElementById('error_message').innerHTML="Password is incorrect";		
		}}
	
	}
	export function loginPage(){
		var status = localStorage.getItem('status')
		if (status == "loggedin") {
			window.location.href = "#forum"
		}
		document.getElementById("login").addEventListener("click",login)
	}
	
