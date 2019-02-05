var nit = document.getElementById('load');
var nittt=document.getElementById('loaded');
nittt.style.display= 'none';
var nitt=document.getElementById('preLoader');
	nit.onload =function MyFunc(){
	
	preLoader.classList.add('loadedd');
	setTimeout(My,500);
}
function My(){
	preLoader.style.display= 'none';
    nittt.style.display= 'inherit';   
}
  var w = document.querySelector('.circle-1');
  var x = document.querySelector('.circle-2');
  var y = document.querySelector('.circle-3');
  var z = document.querySelector('.circle-4');
  pre();
  var i=1;
  function pre(){
  
  	if(i==1)
  		{w.style.display='inline-block';
  	z.style.display='inline-block';
  	
  }
  else{w.style.display='none';
  	z.style.display='none';
  
  }i=i*(-1);
  setTimeout(pre,500)
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
function bigImg(x){
	x.style.border='2px solid #1E90FF';
}
function normalImg(x){
	x.style.border='0px';
}
