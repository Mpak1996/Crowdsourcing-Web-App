$(document).ready(function() {
	
	$(function(){
	    setTimeout(checkAuth,100);
	    
	});
	
	function checkAuth(){
		if(getCookie("username") != null) {
			window.location.replace("/home");
		}else {
			const button = document.querySelector("#btn");
			 button.addEventListener("click", (e) =>{
				 e.preventDefault();
				 console.log("fmm");
				 a();
			 });
			
		}
	}
	
	
	function getCookie(name) {
		 return document.cookie.split("=")[1];
	}
	
//	 const button = document.querySelector("#btn");
//	 button.addEventListener("click", (e) =>{
//		 e.preventDefault();
//		 console.log("fmm");
//		 a();
//	 });
// 
	
	async function a(){
		const email = $("#usrnm")[0].value;
		const pass = $("#pass")[0].value;
    $.ajax({
    	url: `/user/validate-credentials?username=${email}&password=${pass}`
    }).then(function(data, textStatus, xhr) {
    	if(xhr.status === 200){
    		createCookie(data);
    		window.location.replace("/home");
    	}else {
    		alert("Invalid credentials");
    	}
    }).fail(function (error) {
        alert("Invalid credentials");
    });
	}
});

function createCookie(value) {
	let cookie = escape("username") + "=" + escape(value) + ";";
	document.cookie = cookie;
	console.log(cookie);
	console.log("Saves username" + value + " in the cookie");
}

// function login() {
// // var data = new FormData();
// // data.append('email', document.getElementById("user-email").value);
// // data.append('password', document.getElementById("user-pass").value);
// var xhr = new XMLHttpRequest();
// // @TODO - CHANGE "server-dummy.txt" TO YOUR SERVER SCRIPT
// xhr.open('GET', '127.0.0.1:8080/user/validate-credentials?email='
// + document.getElementById("user-email").value + '&password='
// + document.getElementById("user-pass").value);
// xhr.send();
// xhr.onreadystatechange = (e) => {
// console.log(Http.responseText)
// }
// // xhr.onreadystatechange = function() {
// // if (xhr.status == 200) {
// // console.log(valid);
// // }
// // };
// // xhr.onload = function() {
// // if (xhr.status == 200) {
// // var response = JSON.parse(this.response);
// // // VALID
// // if (response.status) {
// // // @TODO - WHERE TO REDIRECT THE USER ON SIGN IN?
// // // location.href = "somewhere.html";
// // }
// // // INVALID EMAIL/PASSWORD
// // else {
// // alert(response.message);
// // }
// // } else {
// // alert("SERVER ERROR!");
// // }
// // };
// // return false;
// }
//
// $('#test-btn').on('click', function() {
// // e.preventDefault();
// console.log("bitch");
// });
//
// $('#login-form').on('submit', function(e) {
// e.preventDefault();
// console.log("bitch1");
// test();
// });
//
// function login1() {
// $.ajax({
// type : "GET",
// url :
// "127.0.0.1:8080/user/validate-credentials?email=test1@gmail.com&password=pass",
// // timeout : 100000,
// success : function() {
// console.log("SUCCESS: ");
// alert(response);
// },
// error : function(e) {
// console.log("ERROR: ", e);
// display(e);
// },
// done : function(e) {
// console.log("DONE");
// }
// });
// }
//
// function test() {
// $.ajax({
// type : "GET",
// url : "https://jsonplaceholder.typicode.com/posts/1",
// // timeout : 100000,
// success : function() {
// console.log("SUCCESS: ");
// alert(response);
// },
// error : function(e) {
// console.log("ERROR: ", e);
// display(e);
// },
// done : function(e) {
// console.log("DONE");
// }
// });
// }
//
//