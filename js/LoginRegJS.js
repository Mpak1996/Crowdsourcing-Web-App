function LogInValidation (){
var UsernameInput=document.getElementById("usrnm").value;
if (UsernameInput=="") {
  alert("Please type a username")
} else if (UsernameInput.length <= 3) {
  alert("Your username has to be at least 4 characters")
}
var PasswordInput=document.getElementById("pass").value;
if (PasswordInput=="") {
  alert("Please type a password")
}else if (PasswordInput.length <= 5) {
  alert("Your Password has to be at least 6 characters")
}
}

function AdminRedirect() {
	window.location.replace("/admin");
}

function Validation() {
var UsernameInput=document.getElementById("usrnm").value;
var TelephoneInput=document.getElementById("tel").value;
if (UsernameInput=="") {
  alert("Please type a username")
} else if (UsernameInput.length <= 3) {
  alert("Your username has to be at least 4 characters")
if (TelephoneInput.length<10 || TelephoneInput.length>10) {
alert("Your telephone is incorrect,please retype")
 

}
var PasswordInput=document.getElementById("pass").value;
if (PasswordInput=="") {
  alert("Please type a password")
}else if (PasswordInput.length <= 5) {
  alert("Your Password has to be at least 6 characters")
}

var PasswordVInput=document.getElementById("passV").value;
if (PasswordVInput=="") {
  alert("Please write again your password")
}else if (PasswordInput != PasswordVInput) {
  alert("Passwords Don't match ")
}
var regex= /\S+@\S+\.\S+/

var EmailInput=document.getElementById("email").value;
if (EmailInput=="") {
  alert("Please type an email")
}else if (!regex.test(EmailInput)){
  alert("Ivalid email")
}
}
