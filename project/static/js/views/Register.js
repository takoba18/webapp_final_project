import {Database} from "./database.js"
export const RegisterContent=`
<div id="register">
<div>
			<input type="text" id="username" placeholder="username">
		</div>
		<div>
			<input type="password" id="password" placeholder="password">
		</div>
		<div>
			<input type="password" id="repeat_password" placeholder="repeat password">
		</div>
		<div>
			<div id="error_message">
			</div>
		</div>
		<div>
			<button id="signup">
				Sign Up
			</button>

		</div>		
		
	</div> 
    `;
	var users = new Database('users')
function register() {
	var name=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	var reppass=document.getElementById("repeat_password").value;
	var	user = users.get('username',name )
	if(pass.value==reppass.value && user==null ){	
	const person=new Object();
	person.username=name;
	person.password=pass;
	person.repeatPassword=reppass;
	users.create(person);
			

	}
	window.location.href="#forum"		
} 
export function registerPage(){
	document.getElementById("signup").addEventListener("click",register)

}