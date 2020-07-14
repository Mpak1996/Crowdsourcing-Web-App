$(document).ready(function() {
	
	$(function(){
		setTimeout(checkAuth,100);
		checkAdmin();
	});
	
	
	
	function checkAuth(){
		if(getCookie("username") == null) {
			window.location.replace("/login");
		}
	}
	
	function checkAdmin(){
		if(getCookie("username") != null && getCookie("username") != "admin") {
			$("#adminButton").addClass("invisible");
			console.log("not admin");
		}
	}
	
function getCookie(name) {
 return document.cookie.split("=")[1];
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=0'
}



function initData() {
	const username = getCookie("username");
	if(username != null) {
    $.ajax({
        type: 'GET',
        url: `/location/get-for-user?username=${username}`,
        dataType: "json",
        async:false,
        success: function(data, textStatus, xhr) {
            console.log(data);
			var newData = [];
			for (i = 0; i < data.length; i++) {
				testData.data.push({lat: insertDecimal(data[i].latitude), lng: insertDecimal(data[i].longtitude), count: 1});
			}
//			testData.data.push(newData);
			heatmapLayer.setData(testData);
        }

    });
	}
};

const logOutbutton = document.querySelector("#logout-btn");
logOutbutton.addEventListener("click", (e) =>{
	eraseCookie("username");
	window.location.replace("/login");
	
});

//var replaced = $("body").html().replace('{username}',getCookie("username"));
//$("body").html(replaced);

const button = document.querySelector("#submit-btn");
button.addEventListener("click", (e) =>{
	 e.preventDefault();
	 console.log("boom")
	 parseJson();
});

const clearbutton = document.querySelector("#clear-btn");
clearbutton.addEventListener("click", (e) =>{
	testData = {
			data : []
		};
	heatmapLayer.setData(testData);
});

testData = {
		data : []
	};

function parseJson(){
	const path = $('#myFile').val().split("\\")[2];
	const username = getCookie("usernme");
	$.ajax({
		type: "POST",
		url: `/location/save/filepath?filepath=${path}&username=${username}`
	}).then(function(data, textStatus, xhr) {
		if(xhr.status === 200){
			console.log("loctions saved");
			console.log(data);
			var newData = [];
			for (i = 0; i < data.length; i++) {
				testData.data.push({lat: insertDecimal(data[i].latitude), lng: insertDecimal(data[i].longtitude), count: 1});
			}
//			testData.data.push(newData);
			heatmapLayer.setData(testData);
		}
	});
}

function insertDecimal(num) {
	   return (num / 1000000).toFixed(6);
}


var testData = {
		data : []
	};

var baseLayer = L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution : '...',
			maxZoom : 30
		});

var cfg = {
	// radius should be small ONLY if scaleRadius is true (or small radius is intended)
	// if scaleRadius is false it will be the constant radius used in pixels
	"radius" : 0.0025,
	"maxOpacity" : .8,
	// scales the radius based on map zoom
	"scaleRadius" : true,
	// if set to false the heatmap uses the global maximum for colorization
	// if activated: uses the data maximum within the current map boundaries
	//   (there will always be a red spot with useLocalExtremas true)
	"useLocalExtrema" : true,
	// which field name in your data represents the latitude - default "lat"
	latField : '',
	// which field name in your data represents the longitude - default "lng"
	lngField : '',
	// which field name in your data represents the data value - default "value"
	valueField : 'count'
};

var heatmapLayer = new HeatmapOverlay(cfg);

var map = L.map('map', {
	center : [ 38.230462, 21.753150 ],
	minZoom : 2,
	zoom : 12,
	layers : [ baseLayer, heatmapLayer ]
});

console.log(testData);
heatmapLayer.setData(testData);

var controlLoader = L.control.loader().addTo(map);
initData();
});
