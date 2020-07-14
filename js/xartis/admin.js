$(document).ready(function() {
	
	$(function(){
	    setTimeout(checkAuth,100);
	    
	});
	
	 const button = document.querySelector("#btn");
	 button.addEventListener("click", (e) =>{
		 e.preventDefault();
		 console.log("deleting data");
		 deleteData();
	 });
	
	 	
	function deleteData(){
		$.ajax({
			 headers: {
		        'Content-Type': 'application/json' 
		      },
			  type: "DELETE",
			  url: "/location/deletedata",
			  success: function(data, textStatus, xhr) {
			  },
			  error: function() {
				  alert("Cannot delete locations");
			  }
		});
		$.ajax({
			 headers: {
		        'Content-Type': 'application/json' 
		      },
			  type: "DELETE",
			  url: "/user/deletedata",
			  success: function(data, textStatus, xhr) {
			  },
			  error: function() {
				  alert("Cannot delete users");
			  }
		});
		eraseCookie("username");
		window.location.replace("/login");
	};
	
	function checkAuth(){
		if(getCookie("username") == null || getCookie("username") != "admin") {
			window.location.replace("/login");
		}
	}
	
	function getUserStats(){
		var users = [];
	    $.ajax({
	        type: 'GET',
	        url: `/user/get`,
	        dataType: "json",
	        async:false,
	        success: function(data, textStatus, xhr) {
				users=  data;	
	        }
	    });
	    
	    var t = "";
	    var d = "";
	    var locations = [];
	    var monCount =0 ;
	    var tueCount =0 ;
	    var wedCount =0 ;
	    var thuCount =0 ;
	    var friCount =0 ;
	    var satCount =0 ;
	    var sunCount =0 ;
	    
	    var janCount = 0;
	    var febCount = 0;
	    var marCount = 0;
	    var aprCount = 0;
	    var mayCount = 0;
	    var juneCount = 0;
	    var julyCount = 0;
	    var augCount = 0;
	    var sepCount = 0;
	    var octCount = 0;
	    var novCount = 0; 
	    var decCount = 0;
	    var locationscount = 0;
	    for (var i = 0; i < users.length; i++){
	    	
	    	var usrname = users[i].username;
	    	 $.ajax({
	 	        type: 'GET',
	 	        url: `/location/get-for-user?username=`+usrname,
	 	        dataType: "json",
	 	        async:false,
	 	        success: function(data, textStatus, xhr) {
	 	        	locationscount = data.length;
	 	            monCount =0 ;
	                tueCount =0 ;
	                wedCount =0 ;
	                thuCount =0 ;
	                friCount =0 ;
	                satCount =0 ;
	                sunCount =0 ;
	    
	                janCount = 0;
	                febCount = 0;
	                marCount = 0;
	                aprCount = 0;
	                mayCount = 0;
	                juneCount = 0;
	                julyCount = 0;
	                augCount = 0;
	                sepCount = 0;
	                octCount = 0;
	                novCount = 0; 
	                decCount = 0;
	 	        	for (var i = 0; i < data.length; i++){
	 	        		if(data[i].day == "MONDAY"){
	 	        			monCount = monCount+1;
	 	        		}
	 	        		else if(data[i].day == "TUESDAY"){
	 	        			tueCount = tueCount+1;
	 	        		}
	 	        		else if(data[i].day == "WEDNESDAY"){
	 	        			wedCount = wedCount+1;
	 	        		}
	 	        		else if(data[i].day == "THURSDAY"){
	 	        			thuCount = thuCount+1;
	 	        		}
	 	        		else if(data[i].day == "FRIDAY"){
	 	        			friCount = friCount+1;
	 	        		}
	 	        		else if(data[i].day == "SATURDAY"){
	 	        			satCount = satCount+1;
	 	        		}
	 	        		else if(data[i].day == "SUNDAY"){
	 	        			sunCount = sunCount+1;
	 	        		}
	 	        		
	 	        		if(data[i].month == "JANUARY"){
	 	        			janCount = janCount+1;
	 	        		}
	 	        		else if(data[i].month == "FEBRUARY"){
	 	        			febCount = febCount+1;
	 	        		}	 	        		
	 	        		else if(data[i].month == "MARCH"){
	 	        			marCount = marCount+1;
	 	        		}
	 	        		else if(data[i].month == "APRIL"){
	 	        			aprCount = aprCount+1;
	 	        		}
	 	        		

	 	        		else if(data[i].month == "MAY"){
	 	        			mayCount = mayCount+1;
	 	        		}
	 	        		else if(data[i].month == "JUNE"){
	 	        			juneCount = juneCount+1;
	 	        		}
	 	        		else if(data[i].month == "JULY"){
	 	        			julyCount = julyCount+1;
	 	        		}
	 	        		else if(data[i].month == "AUGUST"){
	 	        			augCount = augCount+1;
	 	        		}
	 	        		else if(data[i].month == "SEPTEMBER"){
	 	        			sepCount = sepCount+1;
	 	        		}
	 	        		else if(data[i].month == "OCTOBER"){
	 	        			octCount = octCount+1;
	 	        		}
	 	        		else if(data[i].month == "NOVEMBER"){
	 	        			novCount = novCount+1;
	 	        		}
	 	        		else if(data[i].month == "DECEMBER"){
	 	        			decCount = decCount+1;
	 	        		}
	 	        		
	 	        	}
	 	        	
	 	        	
	 	        }

	    	 
	 	    });

	
	    	 var tr = "<tr>";
		      tr += "<td>" +users[i].usrid+"</td>";
		      tr += "<td>" +percentage(janCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(febCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(marCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(aprCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(mayCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(juneCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(julyCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(augCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(sepCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(octCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(novCount, locationscount)+"</td>";
		      tr += "<td>" +percentage(decCount, locationscount)+"</td>";
		      tr += "</tr>";
		      t += tr;
		      
		     var tr1 = "<tr>";
		      tr1 += "<td>" +users[i].usrid+"</td>";
		      tr1 += "<td>" +percentage(sunCount, locationscount)+"</td>";
		      tr1 += "<td>" +percentage(monCount, locationscount)+"</td>";
		      tr1 += "<td>" +percentage(tueCount, locationscount)+"</td>";
		      tr1 += "<td>" +percentage(wedCount, locationscount)+"</td>";
		      tr1 += "<td>" +percentage(thuCount, locationscount)+"</td>";
		      tr1 += "<td>" +percentage(friCount, locationscount)+"</td>";
		      tr1 += "<td>" +percentage(satCount, locationscount)+"</td>";
		      tr1 += "</tr>";
		      d += tr1;
	    }
	    document.getElementById("monthTable").innerHTML += t;
	    document.getElementById("dayTable").innerHTML += d;
	    
	}
	
	function getCookie(name) {
		 return document.cookie.split("=")[1];
	}
	
	function eraseCookie(name) {
	    document.cookie = name + '=; Max-Age=0'
	}


	
	
	function percentage(number, total){
		if(number == 0){
			return 0;
		}else {
			return (number*100)/total
		}
	} 
	
	getUserStats();
});


