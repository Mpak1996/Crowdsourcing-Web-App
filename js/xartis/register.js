$(document).ready(function() {
	
	 const button = document.querySelector("#btn");
	 button.addEventListener("click", (e) =>{
		 e.preventDefault();
		 console.log("Saving user");
		 saveUser();
	 });
	
	function register(){
		saveUser()
	}
 
	
	async function saveUser(){
		const email = $("#email")[0].value;
		const pass = $("#pass")[0].value;
		const passAgain = $("#passV")[0].value;
		const username = $("#usrnm")[0].value;
		if(!email.includes("@") || !email.includes(".") ){
			alert("Invalid email");
		} else {
			var paswd=  /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
			if(pass.match(paswd)) 
			{ 
				if(pass == passAgain){
					const data= { username: username, email: email, pass: pass }; 
					$.ajax({
						 headers: {
					        'Content-Type': 'application/json' 
					      },
						  type: "POST",
						  url: "/user/save",
						  data: JSON.stringify(data),
						  success: function(data, textStatus, xhr) {
				    		console.log(xhr.status);
				    		if(xhr.status === 200){
				    			window.location.replace("/login");
				    		}	    		
						  },
						  error: function() {
							  alert("Username/email already exists");
						  }
					})
				} else {
					alert('Passwords don\'t match')
				}
			} else {		
				alert('Password must be 8 to 15 characters which contain at least one uppercase letter and a special character')
			}
		}
			
	}
});
