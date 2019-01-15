/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var dialog = document.getElementById('afterSearch');
var searchBtn= document.getElementById("searchBut");
var close = document.getElementById("close");

searchBtn.onclick = function() {
   dialog.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    dialog.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  	  $( "#afterSearch" ).show( "slow", function() {
    // Animation complete.
  });
}
/*
var helper=document.getElementsByClassName("helper");
var div=document.getElementById('helpDiv');

helper[0].onclick=function (){
	div.innerHTML='Please provide your FirstName';
	
}
helper[1].onclick=function (){
	div.innerHTML='Please provide your LastName';
}
helper[2].onclick=function (){
	div.innerHTML='Please provide your E:mail';
}
helper[3].onclick=function (){
	div.innerHTML='Complate your password';
}

var sign=document.getElementById("signUp")
signUp.onclick = function() {
    dialog.style.display = "none";
}


*/

$(document).ready(function(){
	$("#selection").mouseenter(function(){
		$("#move").animate({
		    left: '55%'
		});
	}); 
});
var arrPool=[ 
	"url('imgBachPool/1.jpg')",
	"url('imgBachPool/2.jpg')",
	"url('imgBachPool/3.jpg')",
	"url('imgBachPool/4.jpg')",
	"url('imgBachPool/5.jpg')"	
];
var divSlide=document.getElementById('slide');
var lenght=arrPool.length-1;
var i=0;
divSlide.style.backgroundImage =arrPool[i];

var left=document.getElementById('left');
left.onclick=function() {
	if(i<4){
	i++;
	divSlide.style.backgroundImage =arrPool[i];
	console.log(i);
	}else if(i=>4){
		i=0;
	divSlide.style.backgroundImage =arrPool[i];
	console.log("i"+i)
	}
	
}

var right=document.getElementById('right');
right.onclick=function() {
	if(i==0){
	
		i=4;
		divSlide.style.backgroundImage =arrPool[i];
	} else {
		i--;
		divSlide.style.backgroundImage =arrPool[i];	
	}
	
}



